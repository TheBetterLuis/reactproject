import {useParams, useNavigate} from "react-router-dom";
import {isAdminLogged, parseActiveUser, isSomeoneLogged} from "../js/utils";
import {users} from "../js/users";
import {decryptPassword, encryptPassword} from "../js/encryption";
import {useEffect, useState} from "react";

const User = () => {
  const currentUsers = users;
  const currentUser = parseActiveUser();
  const {usernameoremail} = useParams();
  const foundUser = users.find(user => user.username === usernameoremail);
  const navigate = useNavigate();
  let currentUserIndex;
  let tempArray;

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({username: '', email: ''});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const styles = {
    label: "block text-sm font-medium",
    input: "mt-1 block w-full rounded-md border-gray-300 shadow-sm",
    button: "w-full   text-center text-[#dddcdc]  rounded-md ",
    error: " text-sm mt-1 error-text"
  }

  useEffect(() => {
    if (currentUser.username !== usernameoremail && !isAdminLogged()) {
      navigate('/404')
    }
  });

  if (isAdminLogged()) {
    currentUserIndex = currentUsers.findIndex(user => user.username === foundUser.username);
    tempArray = currentUsers.filter(user => user.username !== foundUser.username);
  } else {
    currentUserIndex = currentUsers.findIndex(user => user.username === currentUser.username);
    tempArray = currentUsers.filter(user => user.username !== currentUser.username);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);


    const usernameExists = tempArray.some((user) => user.username === username);
    const emailExists = tempArray.some((user) => user.email === email);

    setErrors({
      username: usernameExists ? 'Username already in use' : '',
      email: emailExists ? 'Email already in use' : '',
      password: !password ? 'Password cannot be blank' : '',
    });

    if (!usernameExists && !emailExists && password) {

      currentUsers[currentUserIndex].username = username;
      currentUsers[currentUserIndex].email = email;
      currentUsers[currentUserIndex].password = encryptPassword(password);
      localStorage.setItem('users', JSON.stringify(currentUsers));
      navigate('/login');
      localStorage.removeItem('activeUser');
      console.log('Updated info!');
    }

    setIsSubmitting(false);
  };


  return (
    <>
      <div class="theBox">
        <div className="inside-box">
          <h2 className="text-2xl font-bold text-center mb-4">User Info</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className={styles.label}>
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={styles.input}
                placeholder={isAdminLogged() ? `${foundUser.username}` : `${currentUser.username}`}
              />
              {errors.username && <p className={styles.error}>{errors.username}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                placeholder={isAdminLogged() ? `${foundUser.email}` : `${currentUser.email}`}
              />
              {errors.email && <p className={styles.error}>{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                placeholder={isAdminLogged() ? `${decryptPassword(foundUser.password)}` : `${decryptPassword(currentUser.password)}`}
              />
              {errors.password && <p className={styles.error}>{errors.password}</p>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.button}
            >
              Update Info
            </button>

          </form>
        </div>

      </div>
    </>
  );
}

export default User;

import React, {useState} from 'react';
import {users, User} from '../js/users';
import {encryptPassword} from '../js/encryption';
import {NavLink, useNavigate} from 'react-router-dom';

const styles = {
  label: "block text-sm font-medium",
  input: "mt-1 block w-full rounded-md border-gray-300 shadow-sm",
  button: "w-full   text-center text-[#dddcdc]  rounded-md ",
  error: " text-sm mt-1 error-text"
}

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({username: '', email: ''});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const existingUsers = users;

  function registerUser(username, email, password) {
    const newUser = new User(username, email, password, "user");
    users.push(newUser);
    const usersJSON = JSON.stringify(users);
    localStorage.setItem("users", usersJSON);
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const usernameExists = existingUsers.some((user) => user.username === username);
    const emailExists = existingUsers.some((user) => user.email === email);

    setErrors({
      username: usernameExists ? 'Username already in use' : '',
      email: emailExists ? 'Email already in use' : '',
      password: !password ? 'Password cannot be blank' : '',
    });

    if (!usernameExists && !emailExists && password) {
      registerUser(username, email, encryptPassword(password));
      console.log('Registration successful!');
      navigate('/login');
    }

    setIsSubmitting(false);
  };

  return (
    <div class="theBox">
      <div className="inside-box">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
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
              placeholder='rockmaster64'
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
              placeholder='dwaynetherock@johnson.com'
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
              placeholder='myPassword5&'
            />
            {errors.password && <p className={styles.error}>{errors.password}</p>}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.button}
          >
            Create account
          </button>
          <NavLink to='/login'>
            <p className='underline underline-offset-4  hover:text-[#878787] dark:hover:text-[#fff]'>Already have an account? &nbsp; Sign in </p>
          </NavLink>
        </form>
      </div>

    </div>
  );
}

export default Register;

import React, {useState} from 'react';
import {users} from '../js/users';
import {decryptPassword} from '../js/encryption';
import {useNavigate, NavLink} from 'react-router-dom';


const styles = {
  label: "block text-sm font-medium",
  input: "mt-1 block w-full rounded-md border-gray-300 shadow-sm",
  button: "w-full   text-center text-[#dddcdc]  rounded-md ",
  error: " text-sm mt-1 error-text"
}

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({username: '', password: ''});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const existingUsers = users;


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const usernameExists = existingUsers.some((user) => user.username === username || user.email === username);

    if (usernameExists) {
      const log = existingUsers.find((user) => (user.username === username || user.email === username))

      console.log(`-${decryptPassword(existingUsers[0].password)}-   -${decryptPassword(log.password)}-`)

      if (decryptPassword(log.password) == password) {
        localStorage.setItem('activeUser', JSON.stringify(log))
        console.log('lesgo')
        navigate('/game');
      } else {
        console.log('incorrect bruh')
      }
    }
    setErrors({
      username: !usernameExists ? 'Username / email not registered' : '',
      password: !password ? 'Incorrect password' : '',
    });


    setIsSubmitting(false);
  };

  return (
    <div class="theBox">
      <div className="inside-box">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className={styles.label}>
              Username / Email
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
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.button}
          >
            Connect
          </button>
          <NavLink to='/register'>
            <p className='underline underline-offset-4 hover:text-[#878787] dark:hover:text-[#fff]'>Don't have an account? &nbsp; Register here</p>
          </NavLink>
        </form>
      </div>

    </div>
  );
}

export default Login;

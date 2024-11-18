import './header.css';
import { Link } from 'react-router-dom';
import { auth } from '../../auth/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
export default function Header({ name }) {
      const navigate = useNavigate();
      const user = auth.currentUser;

      const handleLogout = async () => {
            try {
                  await signOut(auth);
                  localStorage.removeItem('user'); 
                  navigate('/signin');      
            } catch (error) {
                  console.error('فشل تسجيل الخروج:', error.message);
            }
      };

      return (
            <header className="header">
                  <h2>{name}</h2>

                  <section className="personal">
                        {user ? (
                              <>
                                    <button onClick={handleLogout}>{user.displayName || user.email} <i className="fa-solid fa-right-from-bracket"></i> </button>
                              </>
                        ) : (
                              <Link to="/signin">Login</Link>
                        )}
                  </section>
            </header>
      );
}

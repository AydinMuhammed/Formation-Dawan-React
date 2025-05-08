import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../slices/authSlice';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminDashboard.css';

export default function AdminDashboard() {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Tableau de bord administrateur</h1>
        <p className="welcome-message">Bienvenue, {user?.name || 'Administrateur'}</p>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Utilisateurs</h3>
          <p className="stat-number">254</p>
          <p className="stat-description">Utilisateurs inscrits</p>
        </div>
        <div className="stat-card">
          <h3>Articles</h3>
          <p className="stat-number">42</p>
          <p className="stat-description">Articles publiés</p>
        </div>
        <div className="stat-card">
          <h3>Commentaires</h3>
          <p className="stat-number">128</p>
          <p className="stat-description">Commentaires approuvés</p>
        </div>
      </div>

      <div className="recent-activity">
        <h2>Activité récente</h2>
        <ul className="activity-list">
          <li className="activity-item">
            <span className="activity-time">Il y a 10 minutes</span>
            <span className="activity-description">Nouvel utilisateur inscrit : Marie Dupont</span>
          </li>
          <li className="activity-item">
            <span className="activity-time">Il y a 25 minutes</span>
            <span className="activity-description">Article publié : "Les bases de Redux"</span>
          </li>
          <li className="activity-item">
            <span className="activity-time">Il y a 1 heure</span>
            <span className="activity-description">Commentaire approuvé sur l'article "React Hooks"</span>
          </li>
        </ul>
      </div>

      <button className="logout-button" onClick={handleLogout}>
        Se déconnecter
      </button>
    </div>
  );
}
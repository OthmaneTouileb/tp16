import { useState } from 'react';
import './App.css';

function App() {
  const [comptes, setComptes] = useState([
    { id: 1, numero: '001', titulaire: 'Jean Dupont', solde: 1500.00 },
    { id: 2, numero: '002', titulaire: 'Marie Martin', solde: 2300.50 },
    { id: 3, numero: '003', titulaire: 'Pierre Durand', solde: 850.75 }
  ]);
  
  const [nouveauCompte, setNouveauCompte] = useState({
    numero: '',
    titulaire: '',
    solde: 0
  });
  
  const [operation, setOperation] = useState({
    compteId: null,
    type: 'depot',
    montant: ''
  });
  
  const [showForm, setShowForm] = useState(false);
  const [showOperation, setShowOperation] = useState(false);

  const ajouterCompte = (e) => {
    e.preventDefault();
    if (nouveauCompte.numero && nouveauCompte.titulaire) {
      const compte = {
        id: comptes.length + 1,
        ...nouveauCompte,
        solde: parseFloat(nouveauCompte.solde) || 0
      };
      setComptes([...comptes, compte]);
      setNouveauCompte({ numero: '', titulaire: '', solde: 0 });
      setShowForm(false);
    }
  };

  const effectuerOperation = (e) => {
    e.preventDefault();
    if (operation.compteId && operation.montant) {
      const montant = parseFloat(operation.montant);
      setComptes(comptes.map(compte => {
        if (compte.id === operation.compteId) {
          const nouveauSolde = operation.type === 'depot' 
            ? compte.solde + montant 
            : compte.solde - montant;
          return { ...compte, solde: Math.max(0, nouveauSolde) };
        }
        return compte;
      }));
      setOperation({ compteId: null, type: 'depot', montant: '' });
      setShowOperation(false);
    }
  };

  const supprimerCompte = (id) => {
    setComptes(comptes.filter(compte => compte.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Gestion de Comptes Bancaires</h1>
        
        <div className="comptes-container">
          <div className="comptes-header">
            <h2>Liste des Comptes</h2>
            <button 
              className="btn btn-primary"
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? 'Annuler' : '+ Nouveau Compte'}
            </button>
          </div>

          {showForm && (
            <form className="form-nouveau-compte" onSubmit={ajouterCompte}>
              <h3>Ajouter un nouveau compte</h3>
              <input
                type="text"
                placeholder="Numéro de compte"
                value={nouveauCompte.numero}
                onChange={(e) => setNouveauCompte({...nouveauCompte, numero: e.target.value})}
                required
              />
              <input
                type="text"
                placeholder="Nom du titulaire"
                value={nouveauCompte.titulaire}
                onChange={(e) => setNouveauCompte({...nouveauCompte, titulaire: e.target.value})}
                required
              />
              <input
                type="number"
                step="0.01"
                placeholder="Solde initial"
                value={nouveauCompte.solde}
                onChange={(e) => setNouveauCompte({...nouveauCompte, solde: e.target.value})}
              />
              <button type="submit" className="btn btn-success">Ajouter</button>
            </form>
          )}

          <div className="comptes-list">
            {comptes.map(compte => (
              <div key={compte.id} className="compte-card">
                <div className="compte-info">
                  <h3>{compte.titulaire}</h3>
                  <p className="compte-numero">Compte N° {compte.numero}</p>
                  <p className="compte-solde">
                    Solde: <span className={compte.solde >= 0 ? 'positif' : 'negatif'}>
                      {compte.solde.toFixed(2)} €
                    </span>
                  </p>
                </div>
                <div className="compte-actions">
                  <button
                    className="btn btn-info"
                    onClick={() => {
                      setOperation({...operation, compteId: compte.id});
                      setShowOperation(true);
                    }}
                  >
                    Opération
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => supprimerCompte(compte.id)}
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            ))}
          </div>

          {showOperation && (
            <form className="form-operation" onSubmit={effectuerOperation}>
              <h3>Effectuer une opération</h3>
              <select
                value={operation.type}
                onChange={(e) => setOperation({...operation, type: e.target.value})}
              >
                <option value="depot">Dépôt</option>
                <option value="retrait">Retrait</option>
              </select>
              <input
                type="number"
                step="0.01"
                placeholder="Montant"
                value={operation.montant}
                onChange={(e) => setOperation({...operation, montant: e.target.value})}
                required
              />
              <div className="form-buttons">
                <button type="submit" className="btn btn-success">Valider</button>
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={() => {
                    setShowOperation(false);
                    setOperation({ compteId: null, type: 'depot', montant: '' });
                  }}
                >
                  Annuler
                </button>
              </div>
            </form>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;

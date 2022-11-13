import { useState, useEffect } from 'react';
import { db } from './firebase';
import { query, collection, onSnapshot, updateDoc, doc } from 'firebase/firestore'
import { GoSettings } from "react-icons/go";
import { BiArrowBack } from "react-icons/bi";
import Loader from './Components/Loader';
import Switch from './Components/switch';
import './App.scss';

function App() {
  const [loadingStatus, setLoadingStatus] = useState(true)
  const [header, setHeader] = useState({})
  const [isSettingsvisible, setSettingsVisibility] = useState(false)

  const getHeader = async () => {
    setLoadingStatus(true)
    const q = query(collection(db, 'header'))
    const unsubscribe = onSnapshot(q, (querySnapshot) =>{
      let headersArr = []
      querySnapshot.forEach((doc) => {
        headersArr.push({...doc.data(), id: doc.id})
      });
      const [arr] = headersArr
      setLoadingStatus(false)
      setHeader(arr)
    })
    return () => unsubscribe()
  }

  //Read HRI
  useEffect(()=>{
    getHeader()
  }, [])

  const toggleMenu = async () => {
    await updateDoc(doc(db, 'header', header.id),{
      isMenuVisible: !header.isMenuVisible
    })
  }

  const togglePhoenNumber = async () => {
    await updateDoc(doc(db, 'header', header.id),{
      isMobilenoVisible: !header.isMobilenoVisible
    })
  }

  const toggleStoreName = async () => {
    await updateDoc(doc(db, 'header', header.id),{
      isStorenameVisible: !header.isStorenameVisible
    })
  }

  const toggleLogo = async () => {
    await updateDoc(doc(db, 'header', header.id),{
      isLogoVisible: !header.isLogoVisible
    })
  }

  const onClickBack = () => {
    getHeader()
    setSettingsVisibility(!isSettingsvisible)
  }

  const {Logo, Mobileno, Storename, isLogoVisible, isMenuVisible, isMobilenoVisible, isStorenameVisible} = header

  return (

    <div className="App">
      {loadingStatus ? <Loader /> : (
          <div className='header'>
          {isSettingsvisible ? (
            <div className='settings-container'>
              <div className='back' onClick={onClickBack}><BiArrowBack className='arrow' /> Back</div>
              <h1 className='settings-heading'>Settings</h1>
              <div className='logo-container'>
                <div className='opption-controler'>
                  <h1 className='sub-heading'>Logo</h1>
                  <Switch toggle={toggleLogo} checkBoxStatus={isLogoVisible} />
                </div>
                <img src={Logo} alt="logo" className='logo-settings' />
              </div>
              <div className='option-container'>
                <div>
                  <h1 className='sub-heading'>Mobile Number</h1>
                  <p>{Mobileno}</p>
                </div>
                <Switch toggle={togglePhoenNumber} checkBoxStatus={isMobilenoVisible} />
              </div>
              <div className='option-container'>
                <div>
                  <h1 className='sub-heading'>Storename</h1>
                  <p>{Storename}</p>
                </div>
                <Switch toggle={toggleStoreName} checkBoxStatus={isStorenameVisible}  />
              </div>
              <div className='option-container'>
                <div>
                  <h1 className='sub-heading'>menu</h1>
                  <p>Store Menu</p>
                </div>
                <Switch toggle={toggleMenu} checkBoxStatus={isMenuVisible} />
              </div>
            </div>
          ) : (
            <div className='header-container'>
              {header.isLogoVisible && <img src={Logo} alt="logo" className='logo' />}
              <div className='menu-items-container'>
                {isMobilenoVisible && <p className='menu-item'>{Mobileno}</p>}
                {isStorenameVisible && <p className='menu-item'>{Storename}</p>}
                {isMenuVisible && <p className='menu-item'>Menu</p>}
                <GoSettings className='menu-item setting' onClick={() => setSettingsVisibility(!isSettingsvisible)} />
              </div>
            </div>
          )}
        </div>
      )}
      
    </div>
  );
}

export default App;

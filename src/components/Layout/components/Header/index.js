import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCircleXmark, faCloudUpload, faCoins, faEarthAsia, faEllipsis, faEllipsisVertical, faGear, faMagnifyingGlass, faMessage, faPlane, faPlus, faSignIn, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';

import HeadlessTippy from '@tippyjs/react/headless'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 

 
import { useEffect, useState } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Accountlitem from '~/components/Accountlitem';

import Button from '~/components/Button'
import Menu from '~/components/Popper/Menu';
import { faFly } from '@fortawesome/free-brands-svg-icons';


const cx = classNames.bind(styles);

const MENU_ITEMS = [
{
  icon: <FontAwesomeIcon icon={faEarthAsia} />,
  title: 'English',
  children: {
    title: 'Language',
    data: [
      {
        type: 'language',
        code: 'en',
        title: 'English'
      },
      {
        type: 'language',
        code: 'vi',
        title: 'Tiếng Việt'
      }
    ]
  }
},
{
  icon: <FontAwesomeIcon icon={faCircleQuestion} />,
  title: 'Feedback and Help',
  to: '/feedback',
},
{
  icon: <FontAwesomeIcon icon={faEarthAsia} />,
  title: 'Keyboard Shortcuts',
},
]


function Header() {
  const [searchResult, setSearchResult] = useState([]);
  const currentUser = true;
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
          case 'language':
            // Handle change
            break;
            default:
        }
    };
    const userMenu = [
      {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/hoaa',
      },
      {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get Coin',
        to: '/coin',
      },
      {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
      },
    
      ...MENU_ITEMS,
      {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
      },
    ]
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="TikTok" />
        <HeadlessTippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h3 className={cx('search-title')}>Account</h3>
                <Accountlitem />
                <Accountlitem />
                <Accountlitem />
                <Accountlitem />
                <Accountlitem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Search" spellCheck={false}></input>
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            {/*   <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/> */}

            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>
        <div className={cx('actions')}>
        {currentUser ? (
          <>
           <Button text >
           <FontAwesomeIcon icon={faPlus} className={cx('font-plus')} />
                                   Upload
                                </Button>
<Tippy delay={[0, 0 ]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faPlane} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>
           
     
          </>
      
        ): (

            <>
                    <Button text>Upload</Button>
                    <Button primary>Log in</Button>
                    </>
               
                   )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                      {currentUser ? (
                        <img src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f359ad9b23ffbeff595ff074fa6082b2~c5_100x100.jpeg?x-expires=1682499600&x-signature=V8cWBfwa7jpN9eFTW0dJCz5eDNY%3D' className={cx('user-avatar')} alt='Nguyen Van A' />
                      ) : (
                        <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                      )}
                       
                    </Menu>
                    </div>
      </div>
    </header>
  );
}

export default Header;

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSignIn, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';

import { useEffect, useState } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Accountlitem from '~/components/Accountlitem';

import Button from '~/components/Button'

const cx = classNames.bind(styles);
function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="TikTok" />
        <Tippy
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
        </Tippy>
        <div className={cx('actions')}>
          <Button text   >
            Upload
          </Button>
          <Button   primary rightIcon={ <FontAwesomeIcon icon={faSignIn} />} >
            Log in
          </Button>
         
        </div>
      </div>
    </header>
  );
}

export default Header;

import { useEffect, useState , useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import HeadlessTippy from '@tippyjs/react/headless';

import 'tippy.js/dist/tippy.css';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Accountlitem from '~/components/Accountlitem';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';

function Search() {
  const cx = classNames.bind(styles);
  const [searchVaule, setSearchvalue] = useState();
  const [searchResult, setSearchResult] = useState([]);
  const [showResult,setShowResult] = useState(true);

  
    const inputRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1,2,3]);
    }, 0);
  }, []);
  const handleClear = () => {
    setSearchvalue('');
    setSearchResult([])
    inputRef.current.focus();
  }
  const handleHideResult = () => {
    setShowResult(false)
  }
  return (
    <HeadlessTippy
      interactive
      visible={ showResult &&searchResult.length > 0}
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
   onClickOutside={handleHideResult}
    >
      <div className={cx('search')}>
        <input 
        ref={inputRef}
        value={searchVaule}
        placeholder="Search" 
        spellCheck={false} 
        onChange={(e) => setSearchvalue(e.target.value)}
        onFocus={() => setShowResult(true)}
        />
        {!!searchVaule && (
          <button className={cx('clear')} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {/*   <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/> */}

        <button className={cx('search-btn')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;

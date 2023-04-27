import { useEffect, useState, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import HeadlessTippy from '@tippyjs/react/headless';

import * as request from '~/utils/request';

import 'tippy.js/dist/tippy.css';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Accountlitem from '~/components/Accountlitem';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';

import * as searchServices from '~/apiSservices/searchServices'

function Search() {
  const cx = classNames.bind(styles);
  const [searchVaule, setSearchvalue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(searchVaule, 500);

  const inputRef = useRef();

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }
     const fetchApi = async () => {
      setLoading(true)
      const result = await searchServices.search(debounced);
      setSearchResult(result);
      setLoading(false)
     }

   

    fetchApi();
  }, [debounced]);
  const handleClear = () => {
    setSearchvalue('');
    setSearchResult([]);
    inputRef.current.focus();
  };
  const handleHideResult = () => {
    setShowResult(false);
  };
  const handleChange = (e) => {
    const searchVaule = e.target.value;
    if(!searchVaule.startsWith(' ')){
      setSearchvalue(searchVaule);
    
    }
  }

  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h3 className={cx('search-title')}>Account</h3>

            {searchResult.map((result) => (
              <Accountlitem key={result.id} data={result} />
            ))}
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
          onChange={handleChange}
          onFocus={() => setShowResult(true)}
        />
        {!!searchVaule && !loading && (
          <button className={cx('clear')} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

        <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;

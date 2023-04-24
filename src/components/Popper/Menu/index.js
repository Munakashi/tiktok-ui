import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import styles from './Menu.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

const DefaultFn = () => {

};

function Menu({children , items = [], onChange }) {

  const [history,setHistory] = useState([{data: items}])
  const current =  history[history.length - 1]

    const renderItems = () => {
            return  current.data.map((item , index) => { 
              const isParrent = !!item.children;
              return (
    <MenuItem 
    key={index} 
    data={item}
              onClick={() => {
                if(isParrent){
                  setHistory((prev) =>[...prev , item.children]); 
                }
                else {
                  onChange(item)
                }
              }}
    />
            )
  });
    };
    
    return(
    <Tippy

    interactive
    delay={[0,500]}
    placement="bottom-end"
    offset={[16,8]}
    render={(attrs) => (
      <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
        <PopperWrapper className={cx('menu-popper')}>
          <Header  title='Language' onBack={ () => {
            setHistory((prev) => prev.slice(0,prev.length -1))
          }} />
         {renderItems()}
        </PopperWrapper>
      </div>
    )}
    onHide={() => setHistory(prev => prev.slice(0,1))}
  >
{children}
   </Tippy>
   );
}

export default Menu;
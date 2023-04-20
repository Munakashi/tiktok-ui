
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from './Accounlitem.module.scss';

const cx = classNames.bind(styles)

function Accountlitem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')}src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/4f28985cd0e02cdfa848c2d590e8d4aa~c5_300x300.webp?x-expires=1682168400&x-signature=0qZIEWakWKFcA3bKEsAfkVu2XQc%3D" alt="Hoa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Văn A </span>
                    <FontAwesomeIcon  className={cx('check')}  icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>
                  nguyenvana
                </span>
            </div>
        </div>
    );
}

export default Accountlitem;
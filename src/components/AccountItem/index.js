import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss"

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/acc71b8e4493af59fd9fde3acb9151aa~c5_300x300.webp?x-expires=1670324400&x-signature=t1TbJFLEuqpKHeO5Rnoy1DxBNyw%3D" alt="Hoaa" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Lê Xuân Tùng</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>@lexuantung</span>
            </div>
        </div>
    );
}

export default AccountItem;
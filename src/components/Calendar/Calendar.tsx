import style from './Calendar.module.css';
import DateItem from './DateItem/DateItem';

export default function Calendar() {
    return (
        <>
            <section>
                <h2>April 2025</h2>
                <div>
                    <ul className={style['calendar-ul']}>
                        <DateItem date={null} />
                        <DateItem date={null} />
                        <DateItem date={null} />
                        <DateItem date={null} />
                        <DateItem date={null} />
                        <DateItem date={1} />
                        <DateItem date={2} />
                        <DateItem date={3} />
                        <DateItem date={4} />
                        <DateItem date={5} />
                        <DateItem date={6} />
                        <DateItem date={7} />
                        <DateItem date={8} />
                        <DateItem date={9} />
                        <DateItem date={10} />
                        <DateItem date={11} />
                        <DateItem date={12} />
                        <DateItem date={13} />
                        <DateItem date={14} />
                        <DateItem date={15} />
                        <DateItem date={16} />
                        <DateItem date={17} />
                        <DateItem date={18} />
                        <DateItem date={19} />
                        <DateItem date={20} />
                        <DateItem date={21} />
                        <DateItem date={22} />
                        <DateItem date={23} />
                        <DateItem date={24} />
                        <DateItem date={25} />
                        <DateItem date={26} />
                        <DateItem date={27} />
                        <DateItem date={28} />
                        <DateItem date={29} />
                        <DateItem date={30} />
                        <DateItem date={null} />
                        <DateItem date={null} />
                        <DateItem date={null} />
                        <DateItem date={null} />
                        <DateItem date={null} />
                        <DateItem date={null} />
                        <DateItem date={null} />
                    </ul>
                </div>
            </section>
        </>
    );
}
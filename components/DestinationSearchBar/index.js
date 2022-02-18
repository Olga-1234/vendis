import style from './style.module.css';

export default function DestinationSearchBar() {
    return (
        <form className={`${style.form} col-11`}>
            <input name="continent" placeholder="continent" />
            <input name="pays" placeholder="pays" />
            <input name="ville" placeholder="ville " />
            <button>
                <i class="fal fa-search"></i>
            </button>
        </form>
    );
}

import './style.css';
import AlterateBtn from 'components/Buttons/AlterateBtn';
import RemoveBtn from 'components/Buttons/RemoveBtn';
import IncludeBtn from 'components/Buttons/IncludeBtn';
import Graphics from 'components/Graphics/Graphics';

function Main(){
    return(
        <div className='container'>
            <div className='buttons'>
                <IncludeBtn />
                <AlterateBtn />
                <RemoveBtn />
            </div>
            <section>
                <Graphics />
            </section>
            <section>
                <h1>Importar Form</h1>
            </section>
        </div>
    );
}

export default Main;
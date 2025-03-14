import '../Card/Card.scss';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Word from '../Word/Word';
import wordlist from '../../Data/data.json'

const wordarr = wordlist;
export default function Card( {english, transcription, russian, tags, tags_json} ){
    return(
        <div className='container'>
            <Header/>
            <div className='cardcontainer'>
                {
                    wordarr.map((word, index) => (
                        <Word
                            {...word}
                            key={index}
                            // english={english}
                            // transcription={transcription}
                            // russian={russian}
                            // tags={tags}
                            // tags_json={tags_json}
                        />
                    ))
                }
            </div>
            <Footer/>
        </div>
    )
}
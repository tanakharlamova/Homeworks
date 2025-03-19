import '../Word/Word.scss';
import wordlist from '../../Data/data.json'

const wordsArr = wordlist;
console.log(wordsArr)

export default function Word( {english, transcription, russian, tags, tags_json} ){

    return(
        <div className='cardstyle'>
            <h2>{english}</h2>
            <h3>{transcription}</h3>
            <h2>{russian}</h2>
            <p>{tags}</p>
            {/* <p>{tags_json}</p> */}
        </div>
    )
}
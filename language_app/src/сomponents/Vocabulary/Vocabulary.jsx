import wordlist from '../../Data/data.json'
import '../Vocabulary/Vocabulary.scss';


const vocab = wordlist;

export default function Vocabulary(){
    return(
        <div>
            
                <div className='tablerow'>
                    
                    <div>#</div>
                    <div>English</div>
                    <div>Transcription</div>
                    <div>Russian</div>
                    <div>Tags</div>
                    <div>#</div>
                   
                </div>
                {vocab.map((word, index) => {
                        return(
                            <div className='tablerow' key={index}>
                                <div>{`${index + 1}`}</div>
                                <div>{word.english}</div>
                                <div>{word.transcription}</div>
                                <div>{word.russian}</div>
                                <div>{word.tags}</div>
                                <div>{word.tags_json}</div>
                                <div className='table_buttons'>
                                    <button>Save</button>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </div>
                            </div>

                        )})}
                
            
        </div>
    )
}
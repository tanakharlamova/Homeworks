import wordlist from '../../Data/data.json'
//import styles from '../Vocabulary/Vocabulary.scss';


const vocab = wordlist;

export default function Vocabulary(){
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>English</th>
                        <th>Transcription</th>
                        <th>Russian</th>
                        <th>Tags</th>
                        <th>#</th>
                    </tr>
                </thead>
                {vocab.map((word, index) => {
                        return(
                            <tbody key={index}>
                                <tr>
                                    <td>{`${index + 1}`}</td>
                                    <td>{word.english}</td>
                                    <td>{word.transcription}</td>
                                    <td>{word.russian}</td>
                                    <td>{word.tags}</td>
                                    <td>{word.tags_json}</td>
                                    <button>Save</button>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </tr>
                            </tbody>

                        )})}
                
            </table>
        </div>
    )
}
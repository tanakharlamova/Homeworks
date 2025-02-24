import '../Item/Item_style.scss';


export default function Item(props){
    return(
        <div className="heroCard">
            <h2>{props.name}</h2>
            <h4>Вселенная: {props.universe}</h4>
            <h4>Альтер эго: {props.alterego}</h4>
            <h4>Род деятельности: {props.occupation}</h4>
            <h4>Друзья: {props.friends}</h4>
            <h4>Суперсилы: {props.superpowers}</h4>
            <img src={props.url} alt="url" />
        </div>
    )
}
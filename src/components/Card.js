export const Card = ({children, title, text, buttonName, buttonRef}) => {

    return (
        <div className="card" >
            <img src={children} alt="..." className="card-img-top"></img>
            <div className="card-body">
                <h5 className="card=title">{title}</h5>
                <p className="card=text">{text}</p>
                <a href={buttonRef} className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}
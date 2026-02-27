import "./services.css";

function ServiceCard({
    title,
    tags,
    description,
    accessLabel,
    accessType,
    buttonText,
    comingSoon,

})  {
        return(
            <div className="service-card">
              <div className="card-inner">
                <div className={`access-badge ${accessType}`}>
                    {accessLabel}
                </div>

                <h2>{title}</h2>
                <div className="tags">
                    {tags.map((tag,index) => (
                        <span key ={index} className="tag">{tag}</span>
                    ))}

                </div>
                <p>{description}</p>

                <div className="card-footer">
                    {comingSoon ?(
                        <span className="coming-soon">coming soon</span>
                    ) : (
                        <button className="explore-btn">{buttonText} →</button> 
                    )}

                </div>

            </div>  
                    
                

            </div>
            

        );
}


export default ServiceCard;
function ServiceCard({service}) {
    return ( 
        <>
            <div className="techProfileDivs"/>
            <div id="specificName">{service.name}</div>
            <div id="specificPrice">{service.price}</div>
            <div id="specificDescription">{service.description}
            </div>
        </>
     );
}

export default ServiceCard;
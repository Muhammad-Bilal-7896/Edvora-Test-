const Items = (props) => {
    return (
        <div className="individual_item">
            <div className="d-flex .justify-content-center mt-2">
                <img src={props.image} className='img_person_avatar' alt={props.product_name} />
                <div className='mt-3'>
                    <h6 className='item_text1'>{props.product_name}</h6>
                    <h6 className='item_text2'>{props.brand_name}</h6>
                    <h6 className='item_text3'><span className="dollar">$</span> <span>{props.price}</span></h6>
                </div>
            </div>
            <div className="d-flex mt-2">
                <h6 className='item_text_down1'>{props.address}</h6>
                <h6 className='item_text_down2'>{props.date}</h6>
            </div>
            <h6 className='item_text_down3'>{props.discription}</h6>
        </div>
    )
}
export default Items;
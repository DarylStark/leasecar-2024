import './Prices.scss'

function Prices({ car_price }: { car_price: number }) {
    let gross_first_part = 0;
    let gross_second_part = 0;
    let gross_total_year = 0;
    let net_total_year = 0;
    let net_total_month = 0;

    if (car_price > 0) {
        if (car_price > 30000) {
            gross_first_part = 30000 * 0.16;
            gross_second_part = (car_price - 30000) * 0.22;
        }
        else {
            gross_first_part = car_price * 0.16;
            gross_second_part = 0;
        }

        gross_total_year = gross_first_part + gross_second_part;
        net_total_year = gross_total_year * 0.495;
        net_total_month = net_total_year / 12;

        parseFloat("123.456").toFixed(2);
    }

    return (
        <>
            <div className='info_field'>
                <p>Bruto bijtelling eerste deel (tot 30.000 - 16%):</p>
                <p>{gross_first_part.toFixed(2)}</p>
            </div>
            <div className='info_field'>
                <p>Bruto bijtelling tweede deel (vanaf 30.000 - 22%):</p>
                <p>{gross_second_part.toFixed(2)}</p>
            </div>
            <div className='info_field'>
                <p>Totaal bruto bijtelling per jaar: </p>
                <p>{gross_total_year.toFixed(2)}</p>
            </div>
            <div className='info_field'>
                <p>Totaal netto bijtelling per jaar: </p>
                <p>{net_total_year.toFixed(2)}</p>
            </div>
            <div className='info_field'>
                <p>Totaal netto bijtelling per maand: </p>
                <p><b>{net_total_month.toFixed(2)}</b></p>
            </div>
        </>
    )
}

export default Prices;
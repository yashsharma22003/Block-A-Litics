import '@coreui/coreui/dist/css/coreui.min.css';
const { CCard, CCardImage, CCardBody, CCardTitle } = require("@coreui/react");

const PriceCard = (map) => {
    console.log(map);

    return (
        <div className="flex flex-wrap justify-center space-x-10">
            {map.tokenPair.map((pair, index) => (
                <CCard style={{ width: '18rem', padding: '1rem', margin: '1rem' }} key={index}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px', padding: '1rem', margin: '1rem' }}>
                        <CCardImage orientation="top" src={`${pair.base}.png`} style={{ width: '50%', height: 'auto' }} />
                        <CCardImage orientation="top" src={`Arrow.png`} style={{ width: '50%', height: 'auto' }} />
                        <CCardImage orientation="top" src={`${pair.quote}.png`} style={{ width: '50%', height: 'auto' }} />
                    </div>
                    <CCardBody className="transition-transform transform hover:scale-105 hover:shadow-lg">
                        <CCardTitle className="flex justify-between">
                            <h2 className="text-lg">1 {pair.base}</h2>
                            <div className="flex m-auto">
                                &nbsp; &nbsp; &nbsp;&nbsp; &ensp; &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                                <h2 className="text-lg">{((Number(map.prices[index])) / 100000000).toFixed(1)} {pair.quote}</h2>
                            </div>
                        </CCardTitle>
                    </CCardBody>
                </CCard>
            ))}
        </div>
    );
}

export default PriceCard;

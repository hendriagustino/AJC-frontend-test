//jadi gmn ya. aku kekny mau tarok property baru di redux
        //jd ntr select ny kyk bisa di batasi gt, kalo udh ad 3 data yg di "push"/"concat" ke dalam property redux
        // ntr gak bs klik select lg 
        // langsung aja ga usah find index laah
        // pass milih langsukng masukin object nya ke property redux yg mau kau bikin itu
        // bikin array yg cuma bisa nampung 3 max
        // baru di page compare nya tinggal mapping aja
        //tapi setiap aku klik di "product", kan aku cuma passing "id"?
        // ya kau bikin lah action juga biar dia masukin object nya ke array itu
        // kan bisa itu pasang lebih dari 1 fungsi di onClick
        // masukin situ action juga 
        // baru tau aku bs bnyk function di onclick
        // kan dia 1 kalo pake arrow function
        // kalo pake {} bisa banyak di pisah pake ';'
        // hmm. jadi logika nya.
        // kita ngepass 3 id dlu dngn klik 3 kal
        // jangan id object nya semua kasih kalo bisa
        // berarti pass id, terus di action lngsung dicari data2 yang bersangkutan
        // dngn id tersebut? 
        // baru lanjut id ke 2, dst..?
        // eh id boleh laah pokok nya di reducer nya ntar ngasih nya object nya
        // baru di looping
        // nah, berarti kan pertama kita dptin dlu id , trs di reducer baru di cari 
        // index object(data yg bersangkutan) atas id tersebut kan ?
        // iyaa test test aja dulu ntar tergambar itu
        // ok besok aku tny lg ya kalo stuckb,e sok aku ke starbucks jam 9.30 di megamall datang aja aku sama l
        // eh kau di kamerun ya
        // di usa wkw
        // besok jam 9.30 keatas aku chat ya kalo stuck
        // kykny yg bikin susah ntr di nesting object si state redux
        // mesti deep clone copy kan aku baca
        // eksekusi aja jangan banyaj baca hahahah
        //haha ok deh. besok pagi aku lanjut lg. 
        // //  okwak tidur tidur

import React, {Component} from 'react';
import classes from './ProductDetailPage.module.css';
import { connect } from 'react-redux';

import HDFC_ERGO from './../../../../../assets/HDFCErgo.png';
import RELIANCE_GENERAL from './../../../../../assets/RelianceGeneral.png';
import RELIGARE_HEALTH from  './../../../../../assets/Religare.png';

class ProductDetailPage extends Component{
    
    render(){

        const imgSrc = {HDFC_ERGO, RELIANCE_GENERAL, RELIGARE_HEALTH};

        const result = (
            this.props.content
            .filter((plan, index, props)=> {
              return plan.plan.id === this.props.productDetailPageId;
            })
        );
        
        const newResult = result.map((plan,i) => {
            
            const medicalFeatures = (plan.plan.planBenefitCategories.MedicalFeatures.map( (med,i)=>{
                            return(<span className={classes.SpanStyle} key={i}>
                                        {med.benefitName}
                                    </span>);
                        }
                    )
                );
            const travelFeatures = (plan.plan.planBenefitCategories.TravelFeatures.map( (tra,i)=>{
                            return(<span className={classes.SpanStyle} key={i}>
                                        {tra.benefitName}
                                    </span>);
                        }
                    )
                );

            return (
                <div key={i} className={classes.ProductDetail}>
                    
                    <h1>
                        <b>{plan.plan.planName}</b>
                    </h1>
                    
                    <img src={imgSrc[plan.insuranceProviderId]} 
                        alt={imgSrc[plan.insuranceProviderId]} 
                        style={{width:'195px',height:'100px', marginTop: '5px'}}
                    />

                    {/* <p>
                        <span style={{fontSize: '12px'}}>Provider Id:</span>
                        <br/>
                        <b>{plan.insuranceProviderId}</b>
                    </p> */}

                    <p>
                        {/* <span style={{fontSize: '12px'}}>Provider Name:</span> */}
                        {/* <br/> */}
                        <b>{plan.plan.insuranceProviderName}</b>
                    </p>

                    <p>
                        <span style={{fontSize: '12px'}}>Sum Insured :</span>
                        <br/>
                        <b>${plan.sumInsured}</b>
                    </p>

                    <p>
                        <span style={{fontSize: '12px'}}>Premium :</span>
                        <br/>
                        <b>${plan.totalAmount.amount}</b>
                    </p>

                    <h2>Medical Features</h2>
                    {medicalFeatures}
                    <h2>Travel Features</h2>
                    {travelFeatures}
                </div>
            );
        });

        return(
            <div>
                {/* <h1 className={classes.Title}>ProductDetailPage</h1> */}
                {newResult}
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        content : state.content,
        productDetailPageId: state.productDetailPageId,
        selected: state.selected
    }
}

export default connect(mapStateToProps)(ProductDetailPage);

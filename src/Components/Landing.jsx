import React from 'react'
import styled from 'styled-components'
import CarouselComponent from './CarouselComponent'

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    /* color: #fff; */
    gap: 5%;
`
const Cont = styled.div`
    width: 100%;
    margin-top: 5%;
    margin-bottom: 5%;
    height: 50vh;
    padding: 2%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Text = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        color: #000;
        font-family: 'PT Serif', serif;
        font-size: 2vw;
    }
`
const Left = styled.div`
    width: 40%;
    height: 100%;
    background: url('http://www.gashettecoopers.com/associates/images/stories/BusinessSolutions.jpg');
    background-size: cover;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-position: 10% 50%;
`
const Categories = styled.div`
    width: 100%;
    min-height: 100vh;
`
const Heading = styled.h1`
    font-size: 3vw;
    display: flex;
    font-family: 'Raleway', sans-serif;
    justify-content: center;
    align-items: center;
    margin-top: 2%;
    margin-bottom: 5%;
    font-weight: 800;
`
const CateCont = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2%;
    margin-top: 5%;
`
const CateLeft = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    h1{
        font-family: 'Raleway', sans-serif;
        font-size: 2.5vw;
        font-weight: 500;
    }
    p{
        font-family: 'Oxygen', sans-serif;
        line-height: 50px;
        font-size: 1.5vw;
    }
`
const CateRight = styled.div`
    width: 40%;
    height: 100%;
    border-radius: 12px;
    background: url('https://media.istockphoto.com/photos/african-american-teacher-and-her-student-using-laptop-during-computer-picture-id1331594985?b=1&k=20&m=1331594985&s=170667a&w=0&h=OSe_MSytB582ulUl3SFdABPMlERISw7nMJm53rApU9U=');
    background-size: cover;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-position: 10% 50%;
`
const CateRight1 = styled.div`
    width: 40%;
    height: 100%;
    border-radius: 12px;
    background: url('https://images.pexels.com/photos/7820308/pexels-photo-7820308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    background-size: cover;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-position: 10% 50%;
`
const CateRight2 = styled.div`
    width: 40%;
    height: 100%;
    border-radius: 12px;
    background: url('https://images.pexels.com/photos/4269270/pexels-photo-4269270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    background-size: cover;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-position: 10% 50%;
`
const CateRight3 = styled.div`
    width: 40%;
    height: 100%;
    border-radius: 12px;
    background: url('https://biztraction.biz/wp-content/uploads/2021/12/government-agencies-in-Nigeria.jpg');
    background-size: cover;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-position: 10% 50%;
`
function Landing() {
  return (
    <Container>
        <CarouselComponent/>
        <Cont>
            <Left>

            </Left>
            <Text>
                <p>SA-GUEST 360 is your suite of intelligent applications that transform your traditional processes to a digital one, and make provision for you to build your custom solutions that match your business needs.</p>
            </Text>
        </Cont>
        <Categories>
            <Heading>
                CATEGORIES
            </Heading>

            <CateCont>
                <CateLeft>
                    <h1><b>SA-GUEST FOR SCHOOLS</b></h1>   
                    <p> Recieve and check-in Parents/Guardians that come to see their wards during non-visiting Hours. Confirm their identity before receiving them with our Emergency Contact feature.</p>

                </CateLeft>

                <CateRight>
                    
                </CateRight>

            </CateCont>

            <CateCont>
                <CateRight1>
                    
                </CateRight1>

                <CateLeft>
                    <h1><b>SA-GUEST FOR HOTELS</b> </h1>
                    <p>SA-GUEST can serve as a digital receptionist that helps you keep track of all the visitors that come into your Hotel daily. and also Confirm the identity of your visitors before receiving them with our image in-line email notification feature, and notify your guest that they have been pre-booked via email.</p>
                </CateLeft>
            </CateCont>

            <CateCont>
                <CateLeft>
                    <h1><b>SA-GUEST FOR HOSPITALS</b></h1>
                    <p>Keep a track record of Patients admitted and discharged from your Hospital. SA-GUEST gives you total control of your environment by allowing you to either Accept or Reject in-coming visitors before they can be allowed to see a patient in your Hospital.</p>
                </CateLeft>

                <CateRight2>
                    
                </CateRight2>

            </CateCont>

            <CateCont>
                <CateRight3>
                    
                </CateRight3>

                <CateLeft>
                    <h1><b>SA-GUEST FOR GOVERNMENT AGENCIES/CORPORATE BODIES</b></h1>
                    <p>Receiving unexpected visitors or visitors that cause a havoc is not uncommon for many organisations. V-Login addresses this by allowing you to blacklist guests that are likely to cause issues in the future, or have previously caused one issue or the other.</p>
                </CateLeft>
            </CateCont>
        </Categories>
    </Container>
  )
}

export default Landing
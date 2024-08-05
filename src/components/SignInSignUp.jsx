/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react';
import Register from '../pages/Register';
import Login from '../pages/Login';
import styled from 'styled-components';
import SecurityImage from '../assets/security.gif'; // Import your image
import { Helmet } from "react-helmet";  // Import Helmet

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1d;
  padding: 2rem;
      min-height: 100vh;

`;

const AuthBox = styled.div`
  background: linear-gradient(135deg, #8a2387, #e94057, #f27121);
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  max-width: 1000px;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  transform: perspective(1000px) rotateY(10deg);
  transition: transform 0.5s ease;
  &:hover {
    transform: perspective(1000px) rotateY(0);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  padding: 0rem;
  width: 50%;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-right: 2px solid #f27121;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border-bottom: 2px solid #f27121;
  }
`;

const Title = styled.h1`
  font-family: 'Cinzel Decorative', cursive;
  color: #1a1a1d;
  text-align: center;
  margin-bottom: 0rem;
`;

const ToggleFormText = styled.p`
  color: #1a1a1d;
  text-align: center;
  cursor: pointer;
  font-family: 'Cinzel', serif;
  &:hover {
    color: #f27121;
  }
`;


const AuthImage = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SecurityGif = styled.img`
  max-width: 100%;
  border-radius: 0 20px 20px 0;
`;

function SignInSignUp({ showCloseButton }) {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };



  return (
    <Container>
       <Helmet>
    
    <title>EventPro Login | Seamless Access to Your Event Management Dashboard</title>
 <meta
   name="description"
   content="
Access EventPro with ease—log in to your personalized event management dashboard to effortlessly organize, manage, and oversee your events. Enjoy streamlined features, real-time updates, and secure access to all your event details, making your planning process smoother and more efficient. Start managing your events like a pro with EventPro's intuitive login experience."
 />
 <meta property="og:title" content=" EventPro Login | Seamless Access to Your Event Management Dashboard" />
 <meta property="og:description" content="Access EventPro with ease—log in to your personalized event management dashboard to effortlessly organize, manage, and oversee your events. Enjoy streamlined features, real-time updates, and secure access to all your event details, making your planning process smoother and more efficient. Start managing your events like a pro with EventPro's intuitive login experience."/> 
 <meta property="og:type" content="website" />
 <meta property="og:image" content="https://sanjaybasket.s3.ap-south-1.amazonaws.com/eventpro-logo.png" />
 <meta property="og:image:alt" content="Sanjay Patidar" />
 <meta property="og:site_name" content=" EventPro Login | Seamless Access to Your Event Management Dashboard" />

 <meta name="twitter:card" content="summary_large_image" />
 <meta name="twitter:title" content="EventPro Login | Seamless Access to Your Event Management Dashboard" />
 <meta name="twitter:description" content="Access EventPro with ease—log in to your personalized event management dashboard to effortlessly organize, manage, and oversee your events. Enjoy streamlined features, real-time updates, and secure access to all your event details, making your planning process smoother and more efficient. Start managing your events like a pro with EventPro's intuitive login experience." />
 <meta name="twitter:image" content="https://sanjaybasket.s3.ap-south-1.amazonaws.com/eventpro-logo.png" />
 <meta name="twitter:site" content="@sanjaypatidar" />
 <meta name="twitter:creator" content="@sanjaypatidar" />

 <meta name="keywords" content="event management, EventPro, event login, event dashboard, event planning, event organizer, event access, event management system, secure event login, event management tools, portfolio,verification , certificate verify , certfication verification, signup , eduxcel ,founder: Sanjay patidar , tech, education, careers, opportunity, personal-portfolio,developer_sanju,sanjay, Sanjay, SANJAY, Sanjay Patidar, SANJAY PATIDAR, SANJAY WEB DEVELOPER, SANJAY DEVELOPER, Full Stack Web Developer, Mern Stack Web Developer, sanjay patidar, sanjay-patidar, professional, web developer portfolio, coder, web development, UI/UX design, Chandigarh University, EduXcel, Indore,contact, developer, programmer, engineer, AI, Artificial Intelligence ,tech enthusiastic, creativity ,creator, work , technology, coding, projects, experiences, resume, cv" />
 <meta name="author" content="Sanjay Patidar" />        <script type="application/ld+json">
       {JSON.stringify({
         '@context': 'http://schema.org',
         '@type': 'Person',
         "name": "Sanjay Patidar",
         "birthDate": "1998-07-01",
         "birthPlace": {
           "@type": "Place",
           "address": {
             "@type": "PostalAddress",
             "addressLocality": "Indore"
           }
         },
         "alumniOf": {
           "@type": "CollegeOrUniversity",
           "name": "Chandigarh University",
           "location": {
             "@type": "Place",
             "address": {
               "@type": "PostalAddress",
               "addressLocality": "Chandigarh",
               "addressRegion": "Punjab",
               "addressCountry": "India"
             }
           }
         },
         "address": [
           {
             "@type": "PostalAddress",
             "addressLocality": "Indore",
             "addressRegion": "Madhya Pradesh",
             "postalCode": "452001",
             "addressCountry": "India"
           },
           {
             "@type": "PostalAddress",
             "addressLocality": "Chandigarh",
             "addressRegion": "Punjab",
             "postalCode": "160001",
             "addressCountry": "India"
           },
           {
             "@type": "PostalAddress",
             "addressLocality": "Mumbai",
             "addressRegion": "Maharashtra",
             "postalCode": "400001",
             "addressCountry": "India"
           },
           {
             "@type": "PostalAddress",
             "addressLocality": "Bangalore",
             "addressRegion": "Karnataka",
             "postalCode": "560001",
             "addressCountry": "India"
           },
           {
             "@type": "PostalAddress",
             "addressLocality": "Delhi",
             "addressRegion": "Delhi",
             "postalCode": "110001",
             "addressCountry": "India"
           },
           {
             "@type": "PostalAddress",
             "addressLocality": "Kolkata",
             "addressRegion": "West Bengal",
             "postalCode": "700001",
             "addressCountry": "India"
           },
           {
             "@type": "PostalAddress",
             "addressLocality": "Chennai",
             "addressRegion": "Tamil Nadu",
             "postalCode": "600001",
             "addressCountry": "India"
           },
           {
             "@type": "PostalAddress",
             "addressLocality": "Hyderabad",
             "addressRegion": "Telangana",
             "postalCode": "500001",
             "addressCountry": "India"
           },
           {
             "@type": "PostalAddress",
             "addressLocality": "Pune",
             "addressRegion": "Maharashtra",
             "postalCode": "411001",
             "addressCountry": "India"
           },
           {
             "@type": "PostalAddress",
             "addressLocality": "Ahmedabad",
             "addressRegion": "Gujarat",
             "postalCode": "380001",
             "addressCountry": "India"
           },
           {
             "@type": "PostalAddress",
             "addressLocality": "Jaipur",
             "addressRegion": "Rajasthan",
             "postalCode": "302001",
             "addressCountry": "India"
           },
           {
             "@type": "PostalAddress",
             "addressLocality": "Lucknow",
             "addressRegion": "Uttar Pradesh",
             "postalCode": "226001",
             "addressCountry": "India"
           },
           {
             "@type": "PostalAddress",
             "addressLocality": "Bhopal",
             "addressRegion": "Madhya Pradesh",
             "postalCode": "462001",
             "addressCountry": "India"
           },
           {
             "@type": "PostalAddress",
             "addressLocality": "Nagpur",
             "addressRegion": "Maharashtra",
             "postalCode": "440001",
             "addressCountry": "India"
           },
           {
             "@type": "PostalAddress",
             "addressLocality": "Visakhapatnam",
             "addressRegion": "Andhra Pradesh",
             "postalCode": "530001",
             "addressCountry": "India"
           },
           {
             "@type": "PostalAddress",
             "addressLocality": "Kochi",
             "addressRegion": "Kerala",
             "postalCode": "682001",
             "addressCountry": "India"
           },
           {
             "@type": "PostalAddress",
             "addressLocality": "Guwahati",
             "addressRegion": "Assam",
             "postalCode": "781001",
             "addressCountry": "India"
           },
           {
             "@type": "PostalAddress",
             "addressLocality": "Bhubaneswar",
             "addressRegion": "Odisha",
             "postalCode": "751001",
             "addressCountry": "India"
           },
           {
             "@type": "PostalAddress",
             "addressLocality": "Dehradun",
             "addressRegion": "Uttarakhand",
             "postalCode": "248001",
             "addressCountry": "India"
           },
           {
             "@type": "PostalAddress",
             "addressLocality": "Raipur",
             "addressRegion": "Chhattisgarh",
             "postalCode": "492001",
             "addressCountry": "India"
           }
         ],
         "worksFor": {
           "@type": "Organization",
           "name": "EventPro" 
         },
         "url": "https://eventpro.vercel.app/",
         "sameAs": [
           "https://www.linkedin.com/in/sanjay-patidar-25b580292/",
           "https://github.com/hello-developer-sanjay",
           "https://www.instagram.com/sanjay_patidar_mcmxcviii/",
          "https://eventpro.vercel.app/"
           



         ]
   

       })}
     </script>


    </Helmet>	
      <AuthBox className={`auth-box ${isSignUp ? 'register' : 'login'}`}>
      
        <FormContainer>
          <Title>{isSignUp ? 'Sign Up - EventPro' : 'Sign In - EventPro'}</Title>
          <div>{isSignUp ? <Register /> : <Login />}</div>
          <ToggleFormText onClick={toggleForm}>
            {isSignUp
              ? 'Already have an account? Sign in'
              : "Don't have an account? Sign up"}
          </ToggleFormText>
        </FormContainer>
        <AuthImage>
          <SecurityGif src={SecurityImage} alt="Security" />
        </AuthImage>
      </AuthBox>
    </Container>
  );
}

export default SignInSignUp;

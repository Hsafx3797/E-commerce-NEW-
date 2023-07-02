import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return(
    <Wrapper>
      <h2 className="common-heading">Contact</h2>
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.991559675838!2d67.0850751150174!3d24.932357448512416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f4eb7183b97%3A0x35709df45c0003aa!2sLuckyOne%20Mall!5e0!3m2!1sen!2s!4v1666114552799!5m2!1sen!2s" 
      title="map-to-lucky-one"
      width="100%" 
      height="400" 
      style={{border:0}} 
      allowFullScreen="" 
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/mgeqlkoe" method="POST" className="contact-inputs">
            <input type="text" placeholder="Usename" name="username" required autoComplete="off" />
            <input type="Email" placeholder="Email" name="email" required autoComplete="off" />
            <textarea name="message" id="" placeholder="Enter your feedback" cols="30" rows="10" required autoComplete="off" ></textarea>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;

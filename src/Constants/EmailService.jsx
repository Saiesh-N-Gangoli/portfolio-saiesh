import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

export const sendEmail = (e, form) => {
    e.preventDefault();

    return emailjs.sendForm('service_axobjiy', 'template_gcflpos', form.current, {
        publicKey: 'Naqr6vIdc1BSWKFxi',
      })
      .then(
        () => {
          toast.success('Thank you for reaching out!', {
            style:{
          backgroundColor: "#282829",
          color: "#ffdb70"
        }
          });
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          throw error;
        },
      );
  };
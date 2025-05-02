export const SocialMediaLinks = (mediaType) =>{
    switch (mediaType) {
        case "Instagram":
            window.open('https://www.instagram.com/saiesxx.777', '_blank');
            break;
        case "LinkedIn":
            window.open("https://www.linkedin.com/in/saiesh-n-gangoli-8858a5199/", '_balnk');
            break;
        case "Whatsapp":
            window.open("https://wa.me/918197215817", '_blank');
            break;
        case "Github":
            window.open("https://github.com/Saiesh-N-Gangoli", '_blank');
            break;
        default:
            break;
    }
}
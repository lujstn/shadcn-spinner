export function SpinnerIcon({ ...rest }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={rest.width || 24} height={rest.height || 24} viewBox="0 0 24 24" fill="none" {...rest} role="img" color="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C12.5523 2 13 2.44772 13 3V6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6V3C11 2.44772 11.4477 2 12 2Z" fill="currentColor" stroke="currentColor" strokeWidth={rest.strokeWidth || 1}></path>
      <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M12 17C12.5523 17 13 17.4477 13 18V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V18C11 17.4477 11.4477 17 12 17Z" fill="currentColor" stroke="currentColor" strokeWidth={rest.strokeWidth || 1}></path>
      <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M17 12C17 11.4477 17.4477 11 18 11L21 11C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H18C17.4477 13 17 12.5523 17 12Z" fill="currentColor" stroke="currentColor" strokeWidth={rest.strokeWidth || 1}></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 11.4477 2.44772 11 3 11L6 11C6.55228 11 7 11.4477 7 12C7 12.5523 6.55228 13 6 13H3C2.44772 13 2 12.5523 2 12Z" fill="currentColor" stroke="currentColor" strokeWidth={rest.strokeWidth || 1}></path>
      <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M19.0706 4.92961C19.4611 5.32014 19.4611 5.9533 19.0706 6.34383L16.9493 8.46515C16.5588 8.85567 15.9256 8.85567 15.5351 8.46515C15.1446 8.07462 15.1446 7.44146 15.5351 7.05093L17.6564 4.92961C18.0469 4.53909 18.6801 4.53909 19.0706 4.92961Z" fill="currentColor" stroke="currentColor" strokeWidth={rest.strokeWidth || 1}></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M8.46515 15.5351C8.85567 15.9256 8.85567 16.5588 8.46515 16.9493L6.34383 19.0706C5.9533 19.4611 5.32014 19.4611 4.92961 19.0706C4.53909 18.6801 4.53909 18.0469 4.92961 17.6564L7.05093 15.5351C7.44146 15.1446 8.07462 15.1446 8.46515 15.5351Z" fill="currentColor" stroke="currentColor" strokeWidth={rest.strokeWidth || 1}></path>
      <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M15.5351 15.5351C15.9256 15.1446 16.5588 15.1446 16.9493 15.5351L19.0706 17.6564C19.4611 18.0469 19.4611 18.6801 19.0706 19.0706C18.6801 19.4611 18.0469 19.4611 17.6564 19.0706L15.5351 16.9493C15.1446 16.5588 15.1446 15.9256 15.5351 15.5351Z" fill="currentColor" stroke="currentColor" strokeWidth={rest.strokeWidth || 1}></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M4.92961 4.92961C5.32014 4.53909 5.9533 4.53909 6.34383 4.92961L8.46515 7.05093C8.85567 7.44146 8.85567 8.07462 8.46515 8.46515C8.07462 8.85567 7.44146 8.85567 7.05093 8.46515L4.92961 6.34383C4.53909 5.9533 4.53909 5.32014 4.92961 4.92961Z" fill="currentColor" stroke="currentColor" strokeWidth={rest.strokeWidth || 1}></path>
    </svg>
  )
}

export function GithubIcon({ ...rest }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={rest.width || 24} height={rest.height || 24} viewBox="0 0 24 24" fill="none" {...rest} color="currentColor">
      <path d="M9.94118 17.8804C9.94118 17.5169 10.0494 17.2011 10.2238 16.9157C10.3434 16.7199 10.2615 16.4422 10.0453 16.3808C8.25526 15.8726 7 15.0555 7 12.3451C7 11.6404 7.22356 10.9779 7.61654 10.4013C7.71414 10.2581 7.76181 10.193 7.77491 10.1215C7.78806 10.0497 7.76638 9.97161 7.72543 9.80167C7.58167 9.20515 7.57017 8.57672 7.73081 7.99051C7.78361 7.79782 7.8968 7.68543 8.10166 7.70713C8.3674 7.73528 8.82753 7.86109 9.50999 8.30139C9.77813 8.47438 9.9122 8.56088 10.0303 8.58023C10.1484 8.59958 10.3062 8.55906 10.622 8.478C11.0537 8.36716 11.4986 8.30765 12 8.30765C12.5014 8.30765 12.9463 8.36715 13.378 8.478C13.6938 8.55905 13.8516 8.59958 13.9697 8.58023C14.0878 8.56088 14.2219 8.47439 14.49 8.3014C15.1725 7.8611 15.6326 7.73528 15.8983 7.70713C16.1032 7.68543 16.2164 7.79782 16.2692 7.99051C16.4298 8.57672 16.4183 9.20514 16.2746 9.80166C16.2336 9.9716 16.2119 10.0497 16.2251 10.1215C16.2382 10.1929 16.2859 10.2581 16.3834 10.4013C16.7764 10.9779 17 11.6404 17 12.3451C17 15.0555 15.7447 15.8726 13.9547 16.3808C13.7385 16.4422 13.6566 16.7199 13.7762 16.9157C13.9506 17.2011 14.0588 17.5169 14.0588 17.8804V22.6514C19.011 21.6909 22.75 17.3313 22.75 12.0984C22.75 6.16133 17.9371 1.34839 12 1.34839C6.06294 1.34839 1.25 6.16133 1.25 12.0984C1.25 17.3313 4.98901 21.6909 9.94118 22.6514V19.8518C9.88484 19.8452 9.81816 19.8354 9.74225 19.821C9.52615 19.7799 9.23571 19.7012 8.89714 19.5511C8.21489 19.2485 7.36263 18.6669 6.53685 17.5663C6.28826 17.2349 6.35533 16.7648 6.68665 16.5162C7.01798 16.2676 7.48809 16.3347 7.73668 16.666C8.4109 17.5647 9.06058 17.9827 9.50527 18.1799C9.6822 18.2583 9.83089 18.3037 9.94118 18.3299V17.8804Z" fill="currentColor"></path>
    </svg>
  )
}

export function ExternalLinkIcon({ ...rest }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={rest.width || 24} height={rest.height || 24} viewBox="0 0 24 24" fill="none" {...rest} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.54 8.46L8.46002 15.54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.29 8.46H15.54V12.71" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
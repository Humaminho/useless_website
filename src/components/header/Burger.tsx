
export default function Burger() {


	function handleBurgerClose(): void {
		const navList = document.querySelector('.burger-nav-container');
		navList?.classList.remove('burger-nav-container-active');
    const html = document.querySelector('html');
	  html?.classList.remove('no-scroll');
	}

  return (
		<div className="burger-nav-container">
      
      <nav className="burger-nav">
        <svg
          onClick={handleBurgerClose}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="2rem"
          height="2rem"
          fill="currentColor"
          className="close-burger"
        >
          <title>close</title>
          <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
        </svg>
        <ul className="burger-nav-list">
          <li>
            <a href="" className="link burger-link">
              <svg
                fill="currentColor"
                height={40}
                width={40}
                className="nav-icon"
                viewBox="0 0 100 100"
                data-name="Layer 1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                strokeWidth="1"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title></title>
                  <path d="M94.71,49.29l-44-44a1.01424,1.01424,0,0,0-1.42,0l-44,44a.035.035,0,0,1-.00995.02.9901.9901,0,0,0,0,1.38.035.035,0,0,1,.00995.02l44,44a1.01409,1.01409,0,0,0,1.42,0l44-44a1.01416,1.01416,0,0,0,0-1.42ZM49,91.59,9.6,52.19,49,64.73Zm0-28.95L7.86,49.55,49,8.41Zm2,28.95V64.73L90.38,52.2Zm0-28.95V8.41L92.13,49.55Z"></path>
                  <path d="M42.42022,39.70319l1.90585-.64042a1.06886,1.06886,0,0,0,.64972-1.3266A.99051.99051,0,0,0,43.71966,37.05l-1.90585.64043a1.06886,1.06886,0,0,0-.64972,1.32659A.99051.99051,0,0,0,42.42022,39.70319Zm-7.6234,2.5617,1.90585-.64042a1.06887,1.06887,0,0,0,.64972-1.3266.99051.99051,0,0,0-1.25613-.68617l-1.90585.64042a1.06888,1.06888,0,0,0-.64972,1.3266A.99052.99052,0,0,0,34.79682,42.26489Zm-7.6234,2.5617,1.90585-.64043a1.06885,1.06885,0,0,0,.64972-1.32659.99051.99051,0,0,0-1.25613-.68617l-1.90585.64043a1.06885,1.06885,0,0,0-.64972,1.32659A.99051.99051,0,0,0,27.17342,44.82659ZM19.55,47.3883l1.90586-.64043a1.06887,1.06887,0,0,0,.64972-1.3266.99051.99051,0,0,0-1.25613-.68616l-1.90585.64042a1.06887,1.06887,0,0,0-.64973,1.3266A.99052.99052,0,0,0,19.55,47.3883ZM11.92661,49.95l1.90585-.64043a1.06885,1.06885,0,0,0,.64972-1.32659.99051.99051,0,0,0-1.25613-.68617l-1.90585.64043a1.06885,1.06885,0,0,0-.64972,1.32659A.99051.99051,0,0,0,11.92661,49.95Z"></path>
                  <path d="M58.18618,37.69043,56.28033,37.05a.99051.99051,0,0,0-1.25613.68617,1.06887,1.06887,0,0,0,.64972,1.3266l1.90585.64042A.99051.99051,0,0,0,58.8359,39.017,1.06885,1.06885,0,0,0,58.18618,37.69043Zm7.6234,2.56169-1.90585-.64042a.99052.99052,0,0,0-1.25613.68617,1.06887,1.06887,0,0,0,.64972,1.3266l1.90585.64042a.99051.99051,0,0,0,1.25613-.68617A1.06886,1.06886,0,0,0,65.80958,40.25212Zm7.6234,2.56171-1.90585-.64043a.99051.99051,0,0,0-1.25613.68617,1.06886,1.06886,0,0,0,.64972,1.32659l1.90585.64043a.99051.99051,0,0,0,1.25613-.68617A1.06886,1.06886,0,0,0,73.433,42.81383Zm7.6234,2.5617-1.90584-.64042a.9905.9905,0,0,0-1.25613.68616,1.06887,1.06887,0,0,0,.64972,1.3266L80.45,47.3883a.99051.99051,0,0,0,1.25613-.68617A1.06887,1.06887,0,0,0,81.05638,45.37553Zm7.62341,2.56171-1.90585-.64043a.99051.99051,0,0,0-1.25613.68617,1.06886,1.06886,0,0,0,.64972,1.32659l1.90585.64043a.99051.99051,0,0,0,1.25613-.68617A1.06886,1.06886,0,0,0,88.67979,47.93724Z"></path>
                </g>
              </svg>
              <p>WORK</p>
            </a>
          </li>
          <li>
            <a href="" className="link burger-link">
              <svg
                fill="currentColor"
                height={40}
                width={40}
                className="nav-icon"
                viewBox="0 0 100 100"
                data-name="Layer 1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                strokeWidth="1"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title></title>
                  <path d="M84.43457,34.39548q.99591.26913,1.85889.55182a1.0076,1.0076,0,0,0,1.26745-.608.96268.96268,0,0,0-.62719-1.22861q-.91929-.30114-1.962-.58263a1.00432,1.00432,0,0,0-1.23187.6734.966.966,0,0,0,.69476,1.194Zm-7.70795-1.55454q1.00287.15933,1.95.33a1,1,0,0,0,.35461-1.96832q-.96809-.17439-1.99084-.33687a1,1,0,0,0-.31373,1.97522Zm-7.86926-.98659q1.00351.09684,1.97479.20348a1,1,0,0,0,.21827-1.988q-.98437-.10808-2.001-.20619a1,1,0,1,0-.192,1.99075Zm-7.92663-.57942q1.00267.0516,1.98486.11235a1,1,0,0,0,.12329-1.99618q-.99225-.06137-2.00537-.11353a1,1,0,1,0-.10278,1.99738Zm-7.95063-.31047q1.00113.0132,1.98883.0351a.98244.98244,0,1,0,.04517-1.964q-.99674-.0221-2.00714-.03543a.98243.98243,0,1,0-.02686,1.96437Zm-7.95624.03527q.98741-.02191,1.98871-.03518a.98243.98243,0,1,0-.027-1.96437q-1.01011.01335-2.0069.03549a.98245.98245,0,1,0,.04516,1.96407Zm-7.946.388q.98181-.06075,1.98468-.11241a1,1,0,0,0-.10278-1.99735q-1.01295.05214-2.00534.11358a1,1,0,1,0,.12344,1.99618Zm-7.916.67084q.97091-.10663,1.97461-.20355a1,1,0,0,0-.19214-1.99073q-1.01619.09805-2.0008.20623a1,1,0,0,0,.21833,1.988ZM21.318,33.17191q.94648-.17056,1.9498-.33a1,1,0,1,0-.3139-1.97522q-1.02219.16244-1.99057.33694a1,1,0,1,0,.35467,1.9683Zm-7.61593,1.77675q.86113-.28219,1.85867-.55194a.966.966,0,0,0,.69458-1.19409,1.00429,1.00429,0,0,0-1.23187-.67329q-1.04182.28162-1.96192.58281a.96266.96266,0,0,0-.627,1.22872,1.00767,1.00767,0,0,0,1.26761.60781Z"></path>
                  <path d="M7.01093,38.08228c.00256.03045.00647.059.01171.0888a2.762,2.762,0,0,0,.31177,1.11737A5.23515,5.23515,0,0,0,9.19855,41.127a22.85222,22.85222,0,0,0,6.06866,2.40992C23.01038,45.64691,35.66,46.99689,50,47a167.99072,167.99072,0,0,0,29.8855-2.36078A43.26091,43.26091,0,0,0,89.11,42.02582a10.08154,10.08154,0,0,0,2.718-1.68152,4.09052,4.09052,0,0,0,.83753-1.05585,2.76124,2.76124,0,0,0,.31176-1.11725c.00531-.0299.00922-.05847.01178-.08892C92.99,38.05438,93,38.028,92.99994,38a1.09721,1.09721,0,0,1-.03711-.27014,44.5625,44.5625,0,0,0-85.92566,0A1.09721,1.09721,0,0,1,7.00006,38C7,38.028,7.01007,38.05438,7.01093,38.08228ZM50,7A42.71252,42.71252,0,0,1,90.98621,38.10181a.79326.79326,0,0,1-.08551.24566,3.36773,3.36773,0,0,1-1.1778,1.09522A21.0884,21.0884,0,0,1,84.206,41.60748C76.76917,43.64178,64.20172,45.00305,50,45a166.10354,166.10354,0,0,1-29.51129-2.32544,41.47221,41.47221,0,0,1-8.77753-2.47235,8.21228,8.21228,0,0,1-2.17651-1.32184,2.12121,2.12121,0,0,1-.43543-.5329.79607.79607,0,0,1-.08545-.24566A42.71246,42.71246,0,0,1,50,7Z"></path>
                  <path d="M92.99982,62.00085,93,62c.00006-.0282-.01-.05481-.01093-.08289-.0025-.03-.0064-.05816-.01159-.08764a2.76229,2.76229,0,0,0-.31195-1.11792A5.23472,5.23472,0,0,0,90.80139,58.873a22.8495,22.8495,0,0,0-6.06866-2.40986C76.98962,54.35309,64.3399,53.00305,50,53a167.99727,167.99727,0,0,0-29.88556,2.36072A43.26426,43.26426,0,0,0,10.89,57.97412a10.08254,10.08254,0,0,0-2.718,1.68158,4.08834,4.08834,0,0,0-.83753,1.05585,2.761,2.761,0,0,0-.31189,1.11792c-.00519.02948-.00909.05761-.01159.08764C7.01,61.94519,6.99994,61.9718,7,62l.00018.00085a2.72644,2.72644,0,0,0,.33423,1.2876c.00592.01087.01441.0202.02039.031a44.54264,44.54264,0,0,0,85.29065-.0008c.0058-.01062.0144-.01953.02008-.03021A2.72719,2.72719,0,0,0,92.99982,62.00085ZM10.277,60.55731A21.08627,21.08627,0,0,1,15.794,58.39252C23.23077,56.35822,35.79822,54.99689,50,55a166.1109,166.1109,0,0,1,29.51129,2.32538,41.47257,41.47257,0,0,1,8.77747,2.47235,8.21186,8.21186,0,0,1,2.17657,1.3219,2.123,2.123,0,0,1,.43537.53284.79434.79434,0,0,1,.08551.24578c-.05646.19806-.11951.39319-.17865.59009a3.7869,3.7869,0,0,1-1.08466.95435A21.0884,21.0884,0,0,1,84.206,65.60748C76.76917,67.64178,64.20172,69.00305,50,69a166.10354,166.10354,0,0,1-29.51129-2.32544,41.47221,41.47221,0,0,1-8.77753-2.47235,8.21228,8.21228,0,0,1-2.17651-1.32184,2.2945,2.2945,0,0,1-.34339-.396c-.05883-.19556-.12139-.38947-.17749-.58625a.79451.79451,0,0,1,.08545-.24566A3.36829,3.36829,0,0,1,10.277,60.55731ZM50,93A42.65894,42.65894,0,0,1,10.31769,65.75037a27.64488,27.64488,0,0,0,4.94952,1.7865C23.01038,69.64691,35.66,70.99689,50,71a167.99072,167.99072,0,0,0,29.8855-2.36078A43.26091,43.26091,0,0,0,89.11,66.02582c.20062-.0907.386-.184.57287-.277A42.6588,42.6588,0,0,1,50,93Z"></path>
                </g>
              </svg>
              <p>GALLERY</p>
            </a>
          </li>
          <li>
            <a href="" className="link burger-link">
              <svg
                fill="currentColor"
                height={40}
                width={40}
                className="nav-icon"
                viewBox="0 0 100 100"
                data-name="Layer 1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                strokeWidth="1"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title></title>
                  <path d="M49,18v2a1,1,0,0,0,2,0V18a1,1,0,0,0-2,0Zm0-8v2a1,1,0,0,0,2,0V10a1,1,0,0,0-2,0Z"></path>
                  <path d="M94.971,79.761l-16-65c-.00269-.01123-.011-.01905-.01416-.03009a.99459.99459,0,0,0-.15308-.32447c-.00806-.01092-.01953-.01758-.02808-.02813a.80945.80945,0,0,0-.33593-.26246.96908.96908,0,0,0-.13379-.06787l-27.99994-9a.99952.99952,0,0,0-.612,0l-28,9a1703.32858,1703.32858,0,0,1-.23932.12152.98833.98833,0,0,0-.23083.20917c-.0083.01038-.01978.017-.02765.02765a.991.991,0,0,0-.15308.32459c-.00311.011-.01141.01886-.01416.03009l-16,65a.94709.94709,0,0,0-.007.166.99661.99661,0,0,0-.0083.19745.95978.95978,0,0,0,.054.184.59987.59987,0,0,0,.18353.32691.96711.96711,0,0,0,.12744.14062.997.997,0,0,0,.17413.0968.94408.94408,0,0,0,.14417.08014L49.69678,94.95288a.99008.99008,0,0,0,.60638,0l43.99994-14A1.00209,1.00209,0,0,0,94.971,79.761ZM49.99988,7.05042,74.73193,15l-24.732,7.94965L25.26788,15ZM22.71472,16.28015,49,24.72894V92.63239L7.19458,79.33069ZM51,92.63239V24.72894l26.28516-8.44885L92.8053,79.33069Z"></path>
                  <path d="M42.42022,68.70319l1.90585-.64042a1.06886,1.06886,0,0,0,.64972-1.3266A.99051.99051,0,0,0,43.71966,66.05l-1.90585.64043a1.06886,1.06886,0,0,0-.64972,1.32659A.99051.99051,0,0,0,42.42022,68.70319Zm-7.6234,2.5617,1.90585-.64042a1.06887,1.06887,0,0,0,.64972-1.3266.99051.99051,0,0,0-1.25613-.68617l-1.90585.64042a1.06888,1.06888,0,0,0-.64972,1.3266A.99052.99052,0,0,0,34.79682,71.26489Zm-7.6234,2.5617,1.90585-.64043a1.06885,1.06885,0,0,0,.64972-1.32659.99051.99051,0,0,0-1.25613-.68617l-1.90585.64043a1.06885,1.06885,0,0,0-.64972,1.32659A.99051.99051,0,0,0,27.17342,73.82659ZM19.55,76.3883l1.90586-.64043a1.06887,1.06887,0,0,0,.64972-1.3266.99051.99051,0,0,0-1.25613-.68616l-1.90585.64042a1.06887,1.06887,0,0,0-.64973,1.3266A.99052.99052,0,0,0,19.55,76.3883ZM11.92661,78.95l1.90585-.64043a1.06885,1.06885,0,0,0,.64972-1.32659.99051.99051,0,0,0-1.25613-.68617l-1.90585.64043a1.06885,1.06885,0,0,0-.64972,1.32659A.99051.99051,0,0,0,11.92661,78.95Z"></path>
                  <path d="M58.18618,66.69043,56.28033,66.05a.99051.99051,0,0,0-1.25613.68617,1.06887,1.06887,0,0,0,.64972,1.3266l1.90585.64042A.99051.99051,0,0,0,58.8359,68.017,1.06885,1.06885,0,0,0,58.18618,66.69043Zm7.6234,2.56169-1.90585-.64042a.99052.99052,0,0,0-1.25613.68617,1.06887,1.06887,0,0,0,.64972,1.3266l1.90585.64042a.99051.99051,0,0,0,1.25613-.68617A1.06886,1.06886,0,0,0,65.80958,69.25212Zm7.6234,2.56171-1.90585-.64043a.99051.99051,0,0,0-1.25613.68617,1.06886,1.06886,0,0,0,.64972,1.32659l1.90585.64043a.99051.99051,0,0,0,1.25613-.68617A1.06886,1.06886,0,0,0,73.433,71.81383Zm7.6234,2.5617-1.90584-.64042a.9905.9905,0,0,0-1.25613.68616,1.06887,1.06887,0,0,0,.64972,1.3266L80.45,76.3883a.99051.99051,0,0,0,1.25613-.68617A1.06887,1.06887,0,0,0,81.05638,74.37553Zm7.62341,2.56171-1.90585-.64043a.99051.99051,0,0,0-1.25613.68617,1.06886,1.06886,0,0,0,.64972,1.32659l1.90585.64043a.99051.99051,0,0,0,1.25613-.68617A1.06886,1.06886,0,0,0,88.67979,76.93724Z"></path>
                </g>
              </svg>
              <p>ABOUT</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

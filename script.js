const button = document.querySelector('#dropd');
const element = document.querySelector('.header-sub-container')

button.addEventListener('click', event => {
        document.querySelector('.header-sub-container').classList.toggle('invisible');
        button.classList.toggle('dropd');
        button.classList.toggle('drop-active');

        if(button.dataset.state === 'off'){
            button.innerHTML = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                              viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"  class='animated fadeIn'>
                              <polygon style="fill:#79C6E4;" points="138.355,226.993 0,147.113 0,306.872 138.355,386.751 "/>
                              <g style="opacity:0.1;">
                                    <polygon points="138.355,226.993 0,147.113 0,306.872 138.355,386.751 	"/>
                              </g>
                              <polygon style="fill:#79C6E4;" points="138.355,226.993 276.71,147.113 276.71,306.872 138.355,386.751 "/>
                              <g style="opacity:0.2;">
                                    <polygon points="138.355,226.993 276.71,147.113 276.71,306.872 138.355,386.751 	"/>
                              </g>
                              <polygon style="fill:#79C6E4;" points="276.71,147.113 138.355,226.993 0,147.113 138.355,67.234 "/>
                              <circle style="fill:#ED718B;" cx="375.19" cy="177.149" r="136.81"/>
                              <path style="opacity:0.1;enable-background:new    ;" d="M471.018,79.519c9.671,18.76,15.135,40.042,15.135,62.601
                                    c0,75.56-61.253,136.813-136.813,136.813c-37.322,0-71.147-14.951-95.831-39.182c22.72,44.073,68.678,74.212,121.679,74.212
                                    c75.559,0,136.812-61.254,136.812-136.814C512,138.912,496.307,104.345,471.018,79.519z"/>
                              <path style="fill:#FDA75F;" d="M464.206,425.56L336.193,146.962c-4.902-10.667-20.06-10.667-24.962,0L183.219,425.56
                                    c0,25.461,62.901,46.101,140.493,46.101S464.206,451.022,464.206,425.56z"/>
                              <path style="opacity:0.1;enable-background:new    ;" d="M336.193,146.962c-2.693-5.861-8.482-8.482-13.966-7.902
                                    c2.539,1.837,4.526,4.557,5.405,8.071l79.627,315.494c34.547-8.399,56.946-21.873,56.946-37.065L336.193,146.962z"/>
                              <g>
                              </g> </svg>`

            button.dataset.state='on'
        }else if(button.dataset.state === 'on'){
            button.innerHTML = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" class='animated fadeIn'>
                                    <g>
                                    <g>
                                          <path d="M512,179.462c0-37.968-14.923-73.527-42.021-100.128c-2.955-2.901-7.703-2.858-10.607,0.098
                                          c-2.901,2.955-2.857,7.704,0.099,10.606C483.672,113.796,497,145.553,497,179.462c0,54.47-35.334,102.603-86.663,119.208
                                          l-69.678-151.643c-3.44-7.485-10.693-12.135-18.931-12.135c-8.237,0-15.491,4.65-18.931,12.135l-41.854,91.088
                                          c-9.552-17.986-14.554-38.014-14.554-58.654c0-69.094,56.212-125.305,125.305-125.305c20.949,0,41.677,5.269,59.942,15.239
                                          c3.636,1.986,8.191,0.646,10.176-2.99c1.984-3.636,0.646-8.192-2.99-10.176c-20.462-11.169-43.675-17.073-67.128-17.073
                                          c-57.192,0-106.493,34.401-128.319,83.593l-97.823-56.477c-2.32-1.34-5.18-1.34-7.5,0L3.75,143.811
                                          c-0.267,0.154-0.517,0.326-0.757,0.507c-0.063,0.048-0.123,0.098-0.185,0.148c-0.184,0.147-0.359,0.301-0.526,0.463
                                          c-0.052,0.051-0.105,0.1-0.156,0.153c-0.422,0.434-0.786,0.91-1.086,1.422c-0.033,0.056-0.062,0.114-0.093,0.171
                                          c-0.113,0.204-0.216,0.413-0.309,0.626c-0.032,0.074-0.065,0.147-0.095,0.222c-0.103,0.259-0.196,0.522-0.27,0.79
                                          c-0.004,0.015-0.01,0.029-0.014,0.044c-0.076,0.284-0.131,0.574-0.174,0.866c-0.011,0.077-0.019,0.155-0.028,0.233
                                          c-0.028,0.24-0.044,0.481-0.048,0.723C0.008,150.22,0,150.262,0,150.306v155.078c0,2.68,1.43,5.155,3.75,6.495l134.302,77.539
                                          c0.29,0.167,0.589,0.314,0.893,0.44c0.924,0.382,1.892,0.567,2.85,0.567c0.327,0,0.652-0.022,0.974-0.064
                                          c0.063-0.008,0.125-0.027,0.188-0.037c0.255-0.04,0.51-0.084,0.76-0.15c0.116-0.031,0.228-0.078,0.343-0.114
                                          c0.196-0.062,0.393-0.119,0.583-0.197c0.091-0.037,0.177-0.088,0.267-0.129c0.21-0.096,0.421-0.191,0.623-0.306
                                          c0.007-0.004,0.014-0.006,0.02-0.01l62.434-36.047l-29.45,64.092c-0.451,0.982-0.685,2.05-0.685,3.131
                                          c0,15.681,15.597,29.087,45.105,38.77c26.493,8.693,61.57,13.481,98.771,13.481s72.278-4.788,98.772-13.481
                                          c29.508-9.683,45.105-23.089,45.105-38.77c0-1.081-0.233-2.149-0.685-3.131l-11.083-24.122c-1.729-3.763-6.182-5.415-9.946-3.684
                                          c-3.765,1.729-5.413,6.182-3.685,9.946l10.274,22.362c-2.751,15.426-51.225,35.88-128.753,35.88s-126.002-20.453-128.753-35.88
                                          l123.453-268.676c1.408-3.066,4.176-3.398,5.3-3.398c1.124,0,3.892,0.331,5.3,3.398l72.401,157.57
                                          c0.002,0.004,0.003,0.008,0.005,0.011l26.156,56.925c1.73,3.763,6.181,5.415,9.947,3.684c3.764-1.729,5.413-6.183,3.684-9.946
                                          l-22.574-49.131C473.213,293.305,512,239.853,512,179.462z M141.802,219.184l-72.796-42.029
                                          c-3.588-2.073-8.174-0.842-10.245,2.745c-2.071,3.587-0.842,8.174,2.745,10.245l72.796,42.029v137.758L15,301.053V163.296
                                          l18.403,10.626c3.587,2.071,8.173,0.842,10.245-2.745c2.071-3.587,0.842-8.174-2.745-10.245L22.5,150.306l119.302-68.879
                                          l96.177,55.528c-3.076,9.655-5.13,19.761-6.042,30.19L141.802,219.184z M218.818,329.797l-69.516,40.136V232.174l82.186-47.45
                                          c0.922,24.975,8.413,48.997,21.815,70.022L218.818,329.797z"/>
                                    </g></g></svg>`

            button.dataset.state='off'
        }

  });
document.getElementById('button1').addEventListener('click', loadcustomer);

document.getElementById('button2').addEventListener('click', addCustomers);

function loadcustomer(){
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function(){
    if(this.status === 200){
      // console.log(this.responseText);

      const customer = JSON.parse(this.responseText);
      const output = `
        <ul>
          <li>ID: ${customer.id} </li>
          <li>Name: ${customer.name} </li>
          <li>Company: ${customer.company} </li>
          <li>Phone: ${customer.phone} </li>
        </ul>
      `;
      
      document.getElementById('customer').innerHTML = output;
    }
  }

  xhr.send();
};

// function addCustomers(){
//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', 'customers.json', true);

//   xhr.onload = function(){
//     const customers = JSON.parse(this.responseText);

//     let output = '';
//     customers.forEach(function(customer){
//       output += `
//         <ul>
//           <li>ID: ${customer.id}</li>
//           <li>Name: ${customer.name}</li>
//           <li>Company: ${customer.company}</li>
//           <li>Phone: ${customer.phone}</li>
//         </ul> 
//       `;
//     });

//     document.getElementById('customers').innerHTML = output;

//   };

//   xhr.send();
// }


function addCustomers(){
  const xhr = new XMLHttpRequest();
  var title = 'Hi';
  var year = 1994

  xhr.open('GET', `http://www.omdbapi.com/?t=${title}&y=${year}&apikey=b78bdf55&`, true);

  xhr.onload = function(){
    // const customers = JSON.parse(this.responseText);

    // let output = '';
    // customers.forEach(function(customer){
    //   output += `
    //     <ul>
    //       <li>ID: ${customer.id}</li>
    //       <li>Name: ${customer.name}</li>
    //       <li>Company: ${customer.company}</li>
    //       <li>Phone: ${customer.phone}</li>
    //     </ul> 
    //   `;
    // });

    const movie = JSON.parse(this.responseText);
    console.log(movie.Title);
    // console.log(movies.Title);
    let output = '';
        output += `
        <ul>
          <li>Title: ${movie.Title}</li>
          <li>Type: ${movie.Type}</li>
          <li>Year: ${movie.Year}</li>
        </ul> 
      `;

    document.getElementById('customers').innerHTML = output;

  };

  xhr.send();
}
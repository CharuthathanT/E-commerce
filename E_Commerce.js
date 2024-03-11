const img=()=>
{
    let file=document.getElementById("img").files[0];
    let r=new FileReader();
    r.readAsDataURL(file);
    r.onload=function()
    {
        document.getElementById("img1").src=r.result;
    }
}

const tablebody=()=>
{
    document.getElementById("tbody").innerHTML+=`<tr>
    <td>${document.getElementById("stockItems").value}</td>
    <td><img id="img1" src="${img()}" width="200px" height="200px"/></td>
    <td>${document.getElementById("city").value}</td>
    <td>${document.getElementById("rate").value}</td>
    <td>${document.getElementById("amount").value}</td>
    </tr>`;

}
document.getElementById("btn").addEventListener("click",tablebody);
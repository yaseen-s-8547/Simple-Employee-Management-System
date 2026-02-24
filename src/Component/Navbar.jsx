export default function Navbar({empDet}){

    return(
        <>
        <div className="col-12 bg-primary text-center py-2">
            <div className="h1 text-light fw-bold">Employee-Management-System</div>
            <h5>Total Employees:{empDet.length}</h5>
        </div>
        </>
    )
}
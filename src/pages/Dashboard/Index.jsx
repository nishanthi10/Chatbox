import React from 'react'
import AppLayout from '../../components/AppLayout/Index'
import circle from './circle.jpg'
import range from './range.jpg'



const Dashboard = () => {
  return (
    <div>

      <AppLayout>
        <div>
          <div className="main-content px-5 pt-2">
            <h3 className=' '>Hi, Welcome back</h3>
            <div className="">
              <div className="row ">
                <div className="col ">
                  <div className="card bg-info-subtle">
                    <div className="card-body">
                      <p>Weekly sales</p>
                      <h4>714k</h4>
                    </div>
                  </div>
                </div>
                <div className="col ">
                  <div className="card bg-dark-subtle">
                    <div className="card-body">
                      <p>New users</p>
                      <h4>1.35m</h4>
                    </div>
                  </div>
                </div>
                <div className="col ">
                  <div className="card bg-warning-subtle">
                    <div className="card-body">
                      <p>Purchase order</p>
                      <h4>1.72m</h4>
                    </div>
                  </div>
                </div>
                <div className="col ">
                  <div className="card bg-danger-subtle">
                    <div className="card-body">
                      <p>Meassages</p>
                      <h4>234</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pt-5">
                <div className="col-4">
                  <div className="card">
                    <div className="card-body align-items-center">
                      <h4>Current visits</h4>
                      <div className='d-flex justify-content-center align-items-center pt-3'>
                        <img src={circle} alt="chart" className='img-fluid ' />
                      </div>
                    </div>
                   <div className=' card-footer d-flex justify-content-center align-items-center gap-2 pt-3'>
                      <p>America</p>
                      <p>Asia</p>
                      <p>Europe</p>
                      <p>Africa</p>
                    </div>
                  </div>
                </div>
                <div className="col-8">
                  <div className="card">
                    <div className="card-body">
                      <h4>Website visits</h4>
                      <p>+43% than last year</p>
                      <img src={range} alt="chart" className='img-fluid ' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppLayout>
    </div>
  )
}

export default Dashboard

!! title: Scalable Development Processes - Continuous Deployment (CD)
!! slug: scalable-dev-deployment
!! published: 2000-01-01
!! description: The fifth article in the series of how to implement a simple but scalable solution to delivering more value faster to the end user

---





## Different project types  -- Continuous Deployment

There are two different types of software projects and they are defined by their model of distribution: SaaS and
Installs. The distribution of SaaS projects are from the Production Platform into a browser. This provides the
capability of constant change that the user may or may not be aware of. The distribution model of Installs include 
mobile applications, desktop applications, installable versions of the SaaS for internal hosting capabilities, firmware,
and anything else that requires a store front or some versioned package that requires to be installed and updated on the
user's machines.

Continuous Deployment will look slightly different for each type of project. SaaS projects, being, cloud native, 
will be easy since most of the work in process automation over the last decade has been targeting backend applications 
and web clients. 


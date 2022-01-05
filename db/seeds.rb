# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
School.destroy_all
User.destroy_all
Service.destroy_all
User.reset_pk_sequence
School.reset_pk_sequence
Service.reset_pk_sequence
puts "starting"
Robin = User.create!(name:"Robin", username:"robin",password:"robin",password_confirmation:"robin",is_tech:true)
Will = User.create(name:"Will", username:"will",password:"will",password_confirmation:"will", is_tech:false)
puts "have users"

Service.create!(name:"Photographers")
Service.create(name:"Hair Stylist")
Service.create(name:"Nail Tech")
Service.create(name:"Makeup Artist")
Service.create(name:"Waxing Tech")
Service.create(name:"Lashes Tech")
Service.create(name:"Esthetician")
Service.create(name:"Other")
puts "We have services"

School.create(name:"Alabama A&M University",city:"Normal",state:"Alabama",image_url:"https://dbukjj6eu5tsf.cloudfront.net/sidearm.sites/aamusports.com/responsive_2019/images/svgs/footer_logo_aamu-new.png",is_hbcu: true)
School.create(name:"Alabama State University",city:"Montgomery",state:"Alabama",image_url:"https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Alabama_State_Hornets_logo.svg/1200px-Alabama_State_Hornets_logo.svg.png",is_hbcu: true)
School.create(name:"Benedict College",city:"Columbia",state:"South Carolina",image_url:"http://cdn.shopify.com/s/files/1/0105/4251/4223/collections/legacy-history-pride-benedict.jpg",is_hbcu: true)
School.create(name:"Bennett College",city:"Greensboro",state:"North Carolina",image_url:"https://www.bennett.edu/wp-content/uploads/2016/12/sga_bennett_logo.jpg",is_hbcu: true)
School.create(name:"Bethune-Cookman University",city:"Daytona Beach",state:"Flordia",image_url:"http://cdn.shopify.com/s/files/1/0105/4251/4223/collections/legacy-history-pride-bethune-cookman.jpg?v=1569424245",is_hbcu: true)
School.create(name:"Bowie State University",city:"Bowie",state:"Maryland",image_url:"https://i.pinimg.com/originals/de/a8/66/dea8669db3afa1580ded4abc3bcaea67.jpg",is_hbcu: true)
School.create(name:"Cheyney University of Pennsylvania",city:"Cheyney",state:"Pennsylvania",image_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Cheyney_logo_from_NCAA.svg/1200px-Cheyney_logo_from_NCAA.svg.png",is_hbcu: true)
School.create(name:"Clark Atlanta University",city:"Alanta",state:"Georgia",image_url:"https://dbukjj6eu5tsf.cloudfront.net/sidearm.sites/clarkatlantasports.com/images/2020/3/17/CAU_2_71.gif",is_hbcu: true)
School.create(name:"Coppin State University",city:"Baltimore",state:"Maryland",image_url:"data:image/png;base64,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",is_hbcu: true)
School.create(name:"Delaware State University",city:"Dover",state:"Delaware",image_url:"https://www.kindpng.com/picc/m/408-4082476_delaware-state-hornets-logo-png-transparent-delaware-state.png",is_hbcu: true)
School.create(name:"Dillard University",city:"New Orleans",state:"Louisiana",image_url:"https://regents.la.gov/wp-content/uploads/2018/12/dulogonew.png",is_hbcu: true)
School.create(name:"Fayetteville State University",city:"Fayetteville",state:"North Carolina",image_url:"https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/fayetteville_state_u-1/standard.png?1548463616",is_hbcu: true)
School.create(name:"Florida A&M University",city:"Tallahassee",state:"Flordia",image_url:"https://ewscripps.brightspotcdn.com/dims4/default/b4121a9/2147483647/strip/true/crop/620x349+0+0/resize/1280x720!/quality/90/?url=https%3A%2F%2Fmediaassets.wtxl.com%2Fwtxl.com%2Fcontent%2Ftncms%2Fassets%2Fv3%2Feditorial%2Fc%2F95%2Fc95b7aa4-1e46-11e2-a560-001a4bcf6878%2F531a3c959b15c.image.jpg",is_hbcu: true)
School.create(name:"Hampton University",city:"Hampton",state:"Virginia",image_url:"https://www.bartonmalow.com/wp-content/uploads/2021/09/Hampton_University_Logo.png",is_hbcu: true)
School.create(name:"Howard University",city:"Washington",state:"District of Columbia",image_url:"https://www.udc.edu/sbpa/wp-content/uploads/sites/14/2020/07/howard-university-vector-logo-e1593573567653.png",is_hbcu: true)
School.create(name:"Jackson State University",city:"Jackson",state:"Mississippi",image_url:"https://www.planetforward.org/sites/default/files/JSU-Official-Logo.png",is_hbcu: true)
School.create(name:"Lincoln University",city:"Chester County",state:"Pennsylvania",image_url:"https://www.lincoln.edu/sites/default/files/images/content-type/department/communications/wordmark/LU_Wordmark_Seal_Centered.png",is_hbcu: true)
School.create(name:"Morehouse College",city:"Alanata",state:"Georgia",image_url:"https://i.pinimg.com/originals/90/5c/c2/905cc238aa177c0450a852ad1c0920aa.jpg",is_hbcu: true)
School.create(name:"Morgan State University",city:"Baltimore",state:"Maryland",image_url:"https://www.logolynx.com/images/logolynx/4d/4d4eadf6e37f6aa1e92e17900dfe0bd1.jpeg",is_hbcu: true)
School.create(name:"Prairie View A&M University",city:"Prairie View",state:"Texas",image_url:"https://www.pngkey.com/png/detail/143-1434423_pvamu-pvamu-prairie-view-a-m-university.png",is_hbcu: true)
School.create(name:"South Carolina State University",city:"Orangeburg",state:"South Carolina",image_url:"https://www.scstategives.com/wp-content/uploads/2018/06/SC_State_Univ_Foundation_Logo-removebg-preview.png",is_hbcu: true)
School.create(name:"Spelman College",city:"Alanata",state:"Georgia",image_url:"https://www.spelman.edu/images/communications/splogotag2748cmyk.png?sfvrsn=b9a4273f_2",is_hbcu: true)
School.create(name:"Tennessee State University",city:"Nashville",state:"Tennessee",image_url:"https://e-scms.org/wp-content/uploads/2019/04/Tennessee-Logo.png",is_hbcu: true)
School.create(name:"Tuskegee University",city:"Tuskegee",state:"Alabama",image_url:"https://png.pngitem.com/pimgs/s/466-4668349_tuskegee-university-logo-hd-png-download.png",is_hbcu: true)
School.create(name:"Virginia State University",city:"Petersburg",state:"Virginia",image_url:"https://d28htnjz2elwuj.cloudfront.net/wp-content/uploads/2019/05/07160559/Virginia-State-University.jpg",is_hbcu: true)
School.create(name:"Xavier University of Louisiana",city:"New Orleans",state:"Louisiana",image_url:"https://logos-download.com/wp-content/uploads/2016/12/Xavier_University_logo_logotype.png",is_hbcu: true)
puts "We have hbcu"
School.create(name:"Loyola University Maryland",city:"Baltimore",state:"Maryland",image_url:"https://www.loyola.edu/-/media/about/brand/guidelines/logo-rules/lum_primary_gold_tn.png",is_hbcu: false)
School.create(name:"Barnard College",city:"New York",state:"New York",image_url:"https://upload.wikimedia.org/wikipedia/commons/b/b7/Barnard_Logo.jpg",is_hbcu: false)
# School.create(name:"",city:"",state:"",image_url:"",is_hbcu: false)
# School.create(name:"",city:"",state:"",image_url:"",is_hbcu: false)
# School.create(name:"",city:"",state:"",image_url:"",is_hbcu: false)
# School.create(name:"",city:"",state:"",image_url:"",is_hbcu: false)
# School.create(name:"",city:"",state:"",image_url:"",is_hbcu: false)
# School.create(name:"",city:"",state:"",image_url:"",is_hbcu: false)
# School.create(name:"",city:"",state:"",image_url:"",is_hbcu: false)
puts "We have pwi"
puts "Done seeding"
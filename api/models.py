from django.db import models

class About(models.Model):
    AboutId=models.AutoField(primary_key=True)
    Name = models.CharField(max_length=200 , default="Name")
    Profession = models.CharField(max_length=200 , default="Name")
    ProfileImage=models.ImageField(upload_to="profile", default="Profile")
    Fb=models.CharField(max_length=200 , default="Name")
    Twitter=models.CharField(max_length=200 , default="Name")
    Instgram=models.CharField(max_length=200 , default="Name")
    Linkedlist=models.CharField(max_length=200 , default="Linkdin")
    Description= models.TextField(max_length=3000 , default="Description")
    Dob= models.CharField(max_length=200 , default="Dob")
    Email = models.CharField(max_length=200 , default="Email")
    Contact=models.CharField(max_length=200 , default="Contact")
    Address=models.CharField(max_length=200 , default="Address")
    GoogleMap= models.TextField(max_length=4000 , default="Description")
    updated_at = models.DateTimeField(auto_now=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return str(self.Name)


# Cv link
class Cv(models.Model):
    Cvid = models.AutoField(primary_key=True)
    Cvfile=models.FileField(upload_to='cv' ,default="cv.pdf")
    Hirelink =models.CharField(max_length=200 , default="Hire link")
    updated_at = models.DateTimeField(auto_now=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return str(self.Hirelink)

class SkillModel(models.Model):
    SkillId = models.AutoField(primary_key=True)
    SkillTitle =models.CharField(max_length=200 , default="SKill Title")
    SkillPosition =models.CharField(max_length=200 , default=" Position ")
    updated_at = models.DateTimeField(auto_now=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return str(self.SkillTitle)
    

# Services model
class ServiceModel(models.Model):
    ServiceId = models.AutoField(primary_key=True)
    ServiceTitle = models.CharField(max_length=200 , default="Service Title")
    ServiceDesc = models.CharField(max_length=200 , default="Description")
    ServiceIcon = models.CharField(max_length=200 , default="Service Icon Class")
    updated_at = models.DateTimeField(auto_now=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return str(self.ServiceTitle)


#  Work Model
class WorkModel(models.Model):
    Workid=models.AutoField(primary_key=True)
    WorkTitle= models.CharField(max_length=200 , default="Work Title")
    WorkLink= models.CharField(max_length=200 , default="Service Title")
    client=models.CharField(max_length=200 , default="")
    languages=models.TextField(max_length=1055 , default="")
    WorkThumbnail=models.ImageField(upload_to='works', default="work.jpg")
    Serviceid=models.ForeignKey(ServiceModel,  on_delete=models.CASCADE)
    updated_at = models.DateTimeField(auto_now=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return str(self.WorkTitle)

# settings Model
class SettingModel(models.Model):
    SiteId =models.AutoField(primary_key=True)
    SiteTitle = models.CharField(max_length=200 , default="Site Title")
    SiteLogo = models.ImageField(upload_to='site/',default='work.jpg')
    SiteFavicon =  models.ImageField(upload_to='site/',default='work.jpg')
    SiteDesc = models.TextField(max_length=200 , default="Site Description")
    updated_at = models.DateTimeField(auto_now=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return str(self.SiteTitle)
    


    
class ContactModel(models.Model):
    ContactId=models.AutoField(primary_key=True)
    ContactName=models.CharField(max_length=100 , default="Name")
    ContactEmail=models.CharField(max_length=100 , default="Name")
    ContactMsg=models.TextField(max_length=3000 , default="Message")
    updated_at = models.DateTimeField(auto_now=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True)

    MarkTime= models.IntegerField(default=0)
    def __str__(self):
        return str(self.ContactName)
    

class Review(models.Model):
    ReviewId= models.AutoField(primary_key=True)
    ClientName= models.CharField(max_length=250)
    clientReview = models.TextField(max_length=2000)
    updated_at = models.DateTimeField(auto_now=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return str(self.ClientName)

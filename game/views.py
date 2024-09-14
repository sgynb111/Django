from django.http import HttpResponse

# Create your views here.

def index(request):
    line1= '<a href = "/play/">play界面</a>'
    return HttpResponse("game网页" + line1)

def play(request):
    return HttpResponse("play界面")

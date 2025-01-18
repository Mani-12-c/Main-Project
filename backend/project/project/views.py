from django.http import HttpResponse

def homepage(request):
    return HttpResponse("Hello This is a home page")


def about(request):
    return HttpResponse("Hey this is our about page")
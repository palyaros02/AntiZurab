#---------Корректное отображение-----#
import sys; from os import path; from ctypes import windll
try:
    windll.shcore.SetProcessDpiAwareness(True)
except:
    pass
#------------------------------------#

#---обработка пути для компилятора---#
def resource_path(relative_path): 
    if hasattr(sys, '_MEIPASS'):
        return path.join(sys._MEIPASS, relative_path)
    return path.join(path.abspath("."), relative_path)  
#------------------------------------#

#-----------Функционал---------------#
from keyboard import write, add_hotkey, remove_hotkey
from pyperclip import paste

info = "Введите хоткеи и задержку ввода \n(в долях секунды):"
delay = 0.01 
hotkey_code = 'ctrl+alt+v'
hotkey_text = 'ctrl+alt+b'

def normalize(text):
    return '\b' + text.replace('    ', '\t').replace("«", "<<").replace("»", ">>")
    
def pastecode():
    maintext = normalize(paste()).replace('\r\n', '\r').replace('\r\r', '\r')
    write(maintext, restore_state_after = False, delay = delay)
    
def pastetext():
    maintext = normalize(paste()).replace('\t','').replace('\r\n', '\n').replace('\n\n', '\n')
    write(maintext, restore_state_after = False, delay = delay)

def setcode(s):
    global hotkey_code
    remove_hotkey(hotkey_code)
    hotkey_code = s
    add_hotkey(hotkey_code, pastecode)
def settext(s):
    global hotkey_text
    remove_hotkey(hotkey_text)
    hotkey_text = s
    add_hotkey(hotkey_text, pastetext)
def setdelay(s):
    global delay
    delay = int(s) / 1000
    
add_hotkey(hotkey_code, pastecode); add_hotkey(hotkey_text, pastetext)
#------------------------------------#

#----------------GUI-----------------#
from tkinter import *
 
window = Tk()
   
window.title("AntiZurab")
window.resizable(False, False)
window.iconbitmap(resource_path("zurab.ico")) 

Label(window, text = info, font = ("Arial", 9)).pack(padx=5, pady=5, side=TOP) #info
#--------фрейм для вставки---------#
ff  = Frame     (window)                     ; ff.pack (padx=10)
f_l = LabelFrame(ff, text = "Вставить код"  ); f_l.pack(side=LEFT)
f_r = LabelFrame(ff, text = "Вставить текст"); f_r.pack(side=RIGHT)
#--------поля----------------------#
code_entry = Entry(f_l, width=12, font="Consolas"); code_entry.pack(side = LEFT)
text_entry = Entry(f_r, width=12, font="Consolas"); text_entry.pack(side = LEFT)
code_entry.insert(0, hotkey_code); text_entry.insert(0, hotkey_text)
#--------кнопки--------------------#
btncode = Button(f_l, text = "OK", command = lambda:setcode(code_entry.get()))
btntext = Button(f_r, text = "OK", command = lambda:settext(text_entry.get()))
btncode.pack(side = RIGHT);btntext.pack(side = RIGHT)
#--------задержка------------------#
fd = LabelFrame(window, text = "Задержка(мс)"); fd.pack(pady=10)
delay_entry = Entry(fd, width=4, font="Consolas"); delay_entry.pack(side = LEFT)
delay_entry.insert(0, str(int(delay*1000)))
btnd = Button(fd, text = "OK", command = lambda:setdelay(delay_entry.get()))
btnd.pack(side = RIGHT)

image = PhotoImage(file = resource_path("zurab.png")) 
Label(window, image = image).pack(pady=20)

Label(window, text = 'v2.0', font = ("Consolas", 9)).pack(anchor = 'se')

window.bind('<Escape>', lambda: window.destroy())

window.mainloop()
#------------------------------------#

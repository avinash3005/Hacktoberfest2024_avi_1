import tkinter as tk
import math

sci=""
ex=""
def calculate():
    global ex, sci
    try:
        ex = eval(str(ex))
        sci = f"{ex:.4e}"
        if choice.get():
            display.set(sci)
        else:
            display.set(str(ex))
    except ZeroDivisionError:
        display.set("ERROR")
    except SyntaxError:
        display.set("Syntax Error")
def key_append(key):
    global ex
    ex = str(ex)
    curr = display.get()
    if key == 'DEL':
        curr = curr[:-1]
        ex = curr
    elif key == 'AC':
        curr = ""
        ex = curr
    elif key == '√':
        curr+='√('
        ex += 'math.sqrt('
    elif key == 'x²':
        curr += '²'
        ex += '**2'
    elif key == '^':
        curr += '^'
        ex += '**'
    elif key == 'log':
        curr += 'log('
        ex += 'math.log10('
    elif key == 'ln':
        curr += 'ln('
        ex += 'math.log('
    elif key == 'sin' or key == 'cos' or key == 'tan':
        curr += f'{key}('
        ex += f'math.{key}('
    elif key == 'π':
        curr += 'π'
        ex += 'math.pi'
    else:
        curr += key
        ex += key
    display.set(curr)
   
root = tk.Tk()
root.title("Scientific calculator")
root.resizable(False, False)
root.config(padx=10, pady=10, bg="#191717")
display = tk.StringVar()
tk.Entry(bg="#C3EDC0", textvariable=display, borderwidth=8, font=("Consolas", 20), width=16).grid(row=0, column=0, pady=15, padx=10)

choice = tk.BooleanVar()
tk.Checkbutton(text="Scientific Representation", font=("Arial", 10, "bold"), variable=choice, bg="#191717", fg="brown", padx=7).grid(row=1, column=0, columnspan=2, pady=8, sticky="w")
tk.Button(text="Ans", bg="#F1EFEF", command=lambda:display.set("Ans"), font=("Consolas", 12, "bold"), borderwidth=5).grid(row=1, columnspan=2, sticky="e", padx=11)
num_frame = tk.Frame(root, bg="#191717")
keys=['√', 'x²', '^', 'log', 'ln', 
      '(', ')', 'sin', 'cos', 'tan',
      '7', '8', '9', 'DEL', 'AC',
      '4', '5', '6', '*', '/',
      '1', '2', '3', '+','-',
      '0', '.', 'π', '=']

for i in range(6):
    for j in range(5):
        if i<2:
            tk.Button(num_frame, text=keys[i*5+j], bg="#7D7C7C", fg="white", font=("Arial", 15), borderwidth=5, width=3, command=lambda key=keys[i*5+j]:key_append(key)).grid(row=i, column=j, padx=1, pady=1)            
        else:
            if keys[i*5+j] == 'DEL' or keys[i*5+j] == 'AC':
                tk.Button(num_frame, text=keys[i*5+j], bg="#F1EFEF", fg="black", font=("Arial", 15), borderwidth=5, width=3, command=lambda key=keys[i*5+j]:key_append(key)).grid(row=i, column=j, padx=1, pady=1)
            elif keys[i*5+j] == '=':
                tk.Button(num_frame, text=keys[i*5+j], bg="#F1EFEF", fg="black", font=("Arial", 15), borderwidth=5, width=8, command=calculate).grid(row=i, column=j, padx=1, pady=1, columnspan=2)
                break;
            else:
                tk.Button(num_frame, text=keys[i*5+j], bg="#CCC8AA", fg ="black", font=("Arial", 15), borderwidth=5, width=3, command=lambda key=keys[i*5+j]:key_append(key)).grid(row=i, column=j, padx=1, pady=1)
num_frame.grid(row=2, column=0)

root.mainloop()
#comentario

import tensorflow as tf
import numpy as np

celsius = np.array([-40, -10, 0,8, 15, 22, 38], dtype=float)
fahrenheith = np.array([-40, 14,32,46,59,72,100], dtype=float)


oculta1 = tk.keras.layers.Dense(units=3, input_shape=[1])
oculta2 = tk.keras.layers.Dense(units=3)
salida = tk.keras.layers.Dense(units=1)
modelo = tf.keras.Sequential([oculta1, oculta2, salida])

modelo.compile(
    optimizer=tf.keras.optimizers.Adam(0.1),
    loss='mean_squared_error'
)

print("Comenzando entrenamiento....")
historial = modelo.fit(celsius , fahrenheith , epochs=1000, verbose=False)
print("modelo entrenado ")

import matplotlib.pyplot as plt
plt.xlabel("# Epoca")
plt.ylabel("Magnitud de pérdida")
plt.plot(historial.history["loss"])

print("Prueba 1")
resultado = modelo.predict([80.0])
print("El resultado es =" + str(resultado) + " Fahrenheith")

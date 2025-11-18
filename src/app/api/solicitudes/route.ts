// src/app/api/solicitudes/route.ts

import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request: NextRequest) {
  try {
    // 1. Conectarse a la base de datos
    const client = await clientPromise;
    const db = client.db('construyevip'); // Nombre de nuestra base de datos

    // 2. Obtener los datos del formulario (el cuerpo de la solicitud)
    const body = await request.json();

    // 3. Guardar los datos en la colección "solicitudes"
    // MongoDB creará la colección si no existe
    const collection = db.collection('solicitudes');
    const result = await collection.insertOne(body);

    // 4. Responder al cliente que todo fue bien
    return NextResponse.json({ message: 'Solicitud guardada con éxito', data: result }, { status: 201 });

  } catch (error) {
    console.error('Error al guardar la solicitud:', error);
    // 5. Si algo falla, responder con un error
    return NextResponse.json({ message: 'Error al guardar la solicitud' }, { status: 500 });
  }
}
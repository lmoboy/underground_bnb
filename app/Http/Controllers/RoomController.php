<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RoomController extends Controller
{

    public function save(Request $request)
    {
        $room = new \App\Models\Room;
        $room->rental = $request->input('rental');
        $room->date_of_rental = $request->input('date_of_rental');
        $room->save();
        
        return redirect()->back()->with('success', 'Room saved successfully');
    }


    public function index()
    {
        $rooms = \App\Models\Room::all();

        if ($rooms === null) {
            throw new \Exception('Error retrieving rooms from the database.');
        }

    return response()->json(['rooms' => $rooms]);
    }


}

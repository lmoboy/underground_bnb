<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Room extends Controller
{

    public function save(Request $request)
    {
        $room = new \App\Models\Room;
        $room->rental = $request->input('rental');
        $room->date_of_rental = $request->input('date_of_rental');
        $room->save();
        
        return redirect()->back()->with('success', 'Room saved successfully');
    }

}

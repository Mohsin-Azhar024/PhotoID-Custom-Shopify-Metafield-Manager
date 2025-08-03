<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;

class PhotoidController extends Controller
{

    public function create(Request $request)
    {
        // Get the authenticated shop
        $shop = Auth::user();
    
        // Example data to store in metafield
        $data = [
            'example_field' => 'example_value',
            // Add other fields as needed
        ];
    
        // Create metafield data from your data
        $metafieldData = [
            'namespace' => 'photoId',
            'key' => 'custom_key',
            'value' => json_encode($data), // Converting the data to JSON string
            'type' => 'json'
        ];
    
        // Create the metafield
        $response = $shop->api()->rest('POST', '/admin/metafields.json', [
            'metafield' => $metafieldData
        ]);
    
        return response()->json($response);
    }
    
    public function index()
    {
        // Get the authenticated shop
        $shop = Auth::user();

        // Retrieve metafields
        $response = $shop->api()->rest('GET', '/admin/metafields.json');
        $metafields = $response['body']['metafields'];
        $desiredMetafield = collect($metafields)->first(function ($metafield) {
            return $metafield['namespace'] === 'photoId' && $metafield['key'] === 'custom_key';
        });
        if ($desiredMetafield) {
            $data = json_decode($desiredMetafield['value'], true); // Convert JSON string back to an array
        } else {
            $data = '';
        }
        return view('welcome',compact('data'));
    
        // return response()->json($data);
    }

    public function updateMetafieldData()
    {
        // Get the authenticated shop
        $shop = Auth::user();

        // Find the specific metafield ID to update
        $metafieldId = 36380733178163;
        $updatedData = [
            'm_id' => 'G-57890f2',
            'name' => 'uniquete-design.myshopify.com',
        ];;

        // Update metafield data
        $metafieldData = [
            'id' => $metafieldId,
            'value' => json_encode($updatedData),
            'type' => 'json' // Ensure the correct type is specified
        ];

        // Update the metafield
        $response = $shop->api()->rest('PUT', "/admin/metafields/{$metafieldId}.json", [
            'metafield' => $metafieldData
        ]);

        return response()->json($response);
    }

}

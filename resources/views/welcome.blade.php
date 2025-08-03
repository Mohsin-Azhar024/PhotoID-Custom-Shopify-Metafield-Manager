@extends('shopify-app::layouts.default')

@section('content')
    <!-- You are: (shop domain name) -->
    <p>You are: {{ $shopDomain ?? Auth::user()->name }}</p>

    @if($data)
        <b>Measurement ID: {{ $data['m_id'] }}</b><br/>
        <b>Shop Name: {{ $data['name'] }}</b>
    @else
        <p>No data found.</p>
    @endif
@endsection

@section('scripts')
    @parent

    <script>
        actions.TitleBar.create(app, { title: 'Welcome' });
    </script>
@endsection
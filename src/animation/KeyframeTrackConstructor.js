import { AnimationUtils } from './AnimationUtils';

function KeyframeTrackConstructor( name, times, values, interpolation, driver, data ) {

	if ( name === undefined ) throw new Error( "track name is undefined" );

	if ( times === undefined || times.length === 0 ) {

		throw new Error( "no keyframes in track named " + name );

	}

	this.name = name;

	this.times = AnimationUtils.convertArray( times, this.TimeBufferType );
	this.values = AnimationUtils.convertArray( values, this.ValueBufferType );

	this.setInterpolation( interpolation || this.DefaultInterpolation );

	this.setDriver( driver );
	this.setData( data );

	this.validate();
	this.optimize();

}

export { KeyframeTrackConstructor };
